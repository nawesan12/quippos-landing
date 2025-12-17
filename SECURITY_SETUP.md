# Form Security Setup Guide

This document explains the new security measures implemented to prevent bot submissions and ensure data quality.

## Security Features Implemented

### 1. Split Name Fields
- **Before**: Single "Nombre y Apellido" field
- **After**: Separate "Nombre" and "Apellido" fields (both required)
- **Benefit**: Better data structure and harder for bots to fill automatically

### 2. Email Domain Validation
- **Whitelist**: Only accepts emails from valid domains (Gmail, Hotmail, Outlook, Yahoo, iCloud, etc.) and corporate domains
- **Typo Detection**: Rejects common typos like "gmal.com", "hotmai.com", "outlok.com"
- **User Feedback**: Shows suggestions when typos are detected
- **Location**: `lib/validation/emailDomains.ts`

### 3. Email Existence Verification (Optional)
- **API**: ZeroBounce email verification service
- **Benefit**: Confirms email addresses actually exist
- **Fallback**: If API is unavailable, submission continues (fail gracefully)
- **Location**: `app/api/verify-email/route.ts`

### 4. Phone Number Validation
- **Input**: International phone number input with country selector
- **Countries**: AR, CO, PE, MX, CL, UY, PY, BO, EC, VE (based on your markets)
- **Validation**: Checks phone number format and length for each country
- **Location**: `lib/validation/phoneValidation.ts`

### 5. Google reCAPTCHA v2
- **Protection**: Prevents automated bot submissions
- **User Experience**: Standard checkbox CAPTCHA
- **Conditional**: Only renders if API key is configured

### 6. Required Fields
All form fields are now required:
- firstName
- lastName
- workEmail
- phone
- industry
- country
- employeeCount

## Environment Variables Setup

### 1. Create `.env.local` file

```bash
cp .env.example .env.local
```

### 2. Get Google reCAPTCHA Keys (Required)

1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register your site
3. Choose **reCAPTCHA v2** → "I'm not a robot" Checkbox
4. Add your domains (e.g., `quippos.com`, `localhost` for testing)
5. Copy the **Site Key** and **Secret Key**
6. Add to `.env.local`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

### 3. Get ZeroBounce API Key (Optional but Recommended)

1. Sign up at [ZeroBounce](https://www.zerobounce.net/)
2. Get your API key from the dashboard
3. Add to `.env.local`:

```env
ZEROBOUNCE_API_KEY=your_zerobounce_api_key_here
```

**Note**: If not configured, email verification will be skipped gracefully.

### Alternative: Mailboxlayer

If you prefer Mailboxlayer instead of ZeroBounce, you can modify `app/api/verify-email/route.ts`:

```typescript
const response = await fetch(
  `http://apilayer.net/api/check?access_key=${MAILBOXLAYER_API_KEY}&email=${encodeURIComponent(email)}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
);
```

## Testing the Implementation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Test Scenarios

#### Valid Submission
- Fill all fields with valid data
- Use real email domain (gmail.com, outlook.com, or corporate domain)
- Enter valid phone number with country code
- Complete reCAPTCHA
- Submit → Should succeed

#### Invalid Email Domain (Typo)
- Enter email like "user@gmal.com"
- Submit → Should show error: "¿Quisiste decir @gmail.com?"

#### Invalid Email Domain (Fake)
- Enter email like "user@fakefakedomain123.com"
- Submit → Should show error: "Dominio de email inválido"

#### Missing Required Fields
- Leave any field empty
- Submit → Should show specific error for each missing field

#### Invalid Phone Number
- Enter invalid phone number
- Submit → Should show error: "Número de teléfono inválido"

#### Missing reCAPTCHA
- Don't complete reCAPTCHA
- Submit → Should show error: "Por favor, completa el reCAPTCHA"

## Email Domain Validation Details

### Accepted Free Email Providers
- gmail.com, hotmail.com, outlook.com
- yahoo.com, icloud.com, live.com
- aol.com, protonmail.com, zoho.com
- gmx.com, mail.com
- Plus regional variants (.es, .com.ar, .com.mx)

### Rejected Typos
See `lib/validation/emailDomains.ts` for complete list of ~100+ common typos

### Corporate Domains
Any domain with valid TLD (.com, .ar, .mx, .es, .pe, .cl, .uy, .py, .bo, .ec, .ve, etc.) is accepted

## Phone Number Validation Details

### Supported Countries
- 🇦🇷 Argentina (AR): 10-11 digits
- 🇨🇴 Colombia (CO): 10 digits
- 🇵🇪 Peru (PE): 9 digits
- 🇲🇽 Mexico (MX): 10 digits
- 🇨🇱 Chile (CL): 9 digits
- 🇺🇾 Uruguay (UY): 8-9 digits
- 🇵🇾 Paraguay (PY): 9 digits
- 🇧🇴 Bolivia (BO): 8 digits
- 🇪🇨 Ecuador (EC): 9 digits
- 🇻🇪 Venezuela (VE): 10 digits

## Data Flow

```
1. User fills form
   ↓
2. Client-side validation
   - Required fields check
   - Email domain validation (whitelist + typo detection)
   - Phone number format validation
   - reCAPTCHA validation
   ↓
3. Email existence verification (API call to /api/verify-email)
   - Calls ZeroBounce API
   - Fails gracefully if unavailable
   ↓
4. Submit to Formspree
   - Includes all validated data
   - Includes phone number
   - Includes reCAPTCHA token
   ↓
5. Success/Error handling
```

## Monitoring & Maintenance

### Check Form Submissions
Monitor your Formspree dashboard for:
- Quality of submissions
- Reduction in fake/bot submissions
- Any patterns of legitimate users being blocked

### Update Domain Whitelist
If you notice legitimate corporate domains being rejected:
1. Edit `lib/validation/emailDomains.ts`
2. Add domain to `VALID_FREE_DOMAINS` or update TLD list

### Update Phone Number Ranges
If phone validation is too strict/loose:
1. Edit `lib/validation/phoneValidation.ts`
2. Adjust `PHONE_LENGTH_RANGES` for specific countries

### Monitor API Costs
- ZeroBounce: Check usage in dashboard
- reCAPTCHA: Free for most use cases

## Troubleshooting

### reCAPTCHA not showing
- Check `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set in `.env.local`
- Verify domain is registered in reCAPTCHA admin
- Check browser console for errors

### Email verification failing
- Check `ZEROBOUNCE_API_KEY` is valid
- Check API credits/quota
- Submissions will continue even if verification fails

### Phone input styling issues
- Custom styles in `app/globals.css` (lines 127-146)
- Adjust `.PhoneInputInput` class for design changes

## Files Modified/Created

### New Files
- `lib/validation/emailDomains.ts` - Email domain validation
- `lib/validation/phoneValidation.ts` - Phone number validation
- `app/api/verify-email/route.ts` - Email verification API
- `.env.example` - Environment variables template
- `SECURITY_SETUP.md` - This file

### Modified Files
- `components/sections/Hero.tsx` - Updated form with all security features
- `app/globals.css` - Added phone input styling
- `package.json` - Added new dependencies

## Support

For questions or issues:
1. Check this documentation
2. Review error messages in browser console
3. Test with valid data first
4. Contact development team

---

**Implementation Date**: December 2025
**Developer**: Claude Code
**Version**: 1.0
