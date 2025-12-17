// Valid email domains (free email providers)
export const VALID_FREE_DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com',
  'live.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'zoho.com',
  'gmx.com',
  'mail.com',
  'hotmail.es',
  'hotmail.com.ar',
  'hotmail.com.mx',
  'yahoo.es',
  'yahoo.com.ar',
  'yahoo.com.mx',
  'outlook.es',
];

// Common typos for gmail.com
const GMAIL_TYPOS = [
  'gmal.com', 'gmaill.com', 'gamil.com', 'gmaik.com', 'gmial.com',
  'gmail.co', 'gmail.net', 'gmail.con', 'gmail.cm', 'gma1l.com',
  'gmaíl.com', 'gmaol.com', 'gmaio.com', 'gmailc.com', 'gimail.com',
  'gmai.com', 'gmeil.com', 'gmsil.com', 'gmil.com'
];

// Common typos for hotmail.com
const HOTMAIL_TYPOS = [
  'hotmal.com', 'hotmaill.com', 'hotmil.com', 'hotmial.com', 'hoftmail.com',
  'hotmaik.com', 'hotmaol.com', 'hotnail.com', 'hotmai.com', 'hotmail.co',
  'hotmail.net', 'h0tmail.com', 'hotmaio.com', 'hptmail.com'
];

// Common typos for outlook.com
const OUTLOOK_TYPOS = [
  'otlook.com', 'outlok.com', 'outllok.com', 'outloo.com', 'outloook.com',
  'outlokk.com', 'ouutlook.com', 'outlokc.com', 'outlook.co', 'outlook.net',
  'outloik.com', 'outlooc.com'
];

// Common typos for yahoo.com
const YAHOO_TYPOS = [
  'yaho.com', 'yaoo.com', 'yahho.com', 'yahooo.com', 'yaahoo.com',
  'yhaoo.com', 'yahoo.co', 'yahoo.net', 'yaho0.com', 'yahol.com',
  'yahio.com', 'yahoi.com', 'yaaho.com', 'yahoop.com'
];

// Common typos for icloud.com
const ICLOUD_TYPOS = [
  'iclod.com', 'icluod.com', 'iclud.com', 'iclloud.com', 'icload.com',
  'iclou.com', 'ic1oud.com', 'icl0ud.com', 'icoud.com', 'icloun.com',
  'icllud.com', 'iclooud.com', 'iclous.com', 'icloid.com'
];

// Common typos for live.com
const LIVE_TYPOS = [
  'lve.com', 'livee.com', 'liv.com', 'liive.com', 'live.co',
  'live.net', 'live.cm', 'llive.com', 'livve.com', 'libe.com', 'l9ve.com'
];

// Common typos for aol.com
const AOL_TYPOS = [
  'ao1.com', 'aoll.com', 'aol.co', 'aol.cm', 'aolc.com',
  'aok.com', 'aoo.com', 'apol.com', 'aool.com'
];

// Common typos for protonmail.com
const PROTONMAIL_TYPOS = [
  'protonmil.com', 'protonmai.com', 'protomail.com', 'protonmaill.com',
  'prontonmail.com', 'protinmail.com', 'protonmaik.com', 'protonmial.com',
  'protonmail.co', 'protonmail.net', 'protoonmail.com'
];

// Common typos for zoho.com
const ZOHO_TYPOS = [
  'zooho.com', 'zohoo.com', 'zhoho.com', 'zpho.com', 'zoho.co',
  'zoho.net', 'zoh.com', 'zohho.com', 'zoho.cm', 'zoh0.com'
];

// Common typos for gmx.com
const GMX_TYPOS = [
  'gmx.co', 'gmx.net', 'gmz.com', 'gnx.com', 'gmx.cm',
  'gmx.con', 'gmxcom.com', 'gmxm.com', 'gmx1.com'
];

// Common typos for mail.com
const MAIL_TYPOS = [
  'mial.com', 'maill.com', 'mai.com', 'mail.co', 'mail.net',
  'maik.com', 'mail.cm', 'miall.com', 'ma1l.com', 'mailc.com'
];

// All typos combined
export const INVALID_DOMAIN_TYPOS = [
  ...GMAIL_TYPOS,
  ...HOTMAIL_TYPOS,
  ...OUTLOOK_TYPOS,
  ...YAHOO_TYPOS,
  ...ICLOUD_TYPOS,
  ...LIVE_TYPOS,
  ...AOL_TYPOS,
  ...PROTONMAIL_TYPOS,
  ...ZOHO_TYPOS,
  ...GMX_TYPOS,
  ...MAIL_TYPOS,
];

// Suggestions for typos
const TYPO_SUGGESTIONS: Record<string, string> = {
  // Gmail typos
  ...Object.fromEntries(GMAIL_TYPOS.map(typo => [typo, 'gmail.com'])),
  // Hotmail typos
  ...Object.fromEntries(HOTMAIL_TYPOS.map(typo => [typo, 'hotmail.com'])),
  // Outlook typos
  ...Object.fromEntries(OUTLOOK_TYPOS.map(typo => [typo, 'outlook.com'])),
  // Yahoo typos
  ...Object.fromEntries(YAHOO_TYPOS.map(typo => [typo, 'yahoo.com'])),
  // iCloud typos
  ...Object.fromEntries(ICLOUD_TYPOS.map(typo => [typo, 'icloud.com'])),
  // Live typos
  ...Object.fromEntries(LIVE_TYPOS.map(typo => [typo, 'live.com'])),
  // AOL typos
  ...Object.fromEntries(AOL_TYPOS.map(typo => [typo, 'aol.com'])),
  // ProtonMail typos
  ...Object.fromEntries(PROTONMAIL_TYPOS.map(typo => [typo, 'protonmail.com'])),
  // Zoho typos
  ...Object.fromEntries(ZOHO_TYPOS.map(typo => [typo, 'zoho.com'])),
  // GMX typos
  ...Object.fromEntries(GMX_TYPOS.map(typo => [typo, 'gmx.com'])),
  // Mail typos
  ...Object.fromEntries(MAIL_TYPOS.map(typo => [typo, 'mail.com'])),
};

export function getDomainSuggestion(domain: string): string | null {
  return TYPO_SUGGESTIONS[domain.toLowerCase()] || null;
}

export function isValidDomain(domain: string): boolean {
  const lowerDomain = domain.toLowerCase();

  // Check if it's a known typo
  if (INVALID_DOMAIN_TYPOS.includes(lowerDomain)) {
    return false;
  }

  // Check if it's a valid free email domain
  if (VALID_FREE_DOMAINS.includes(lowerDomain)) {
    return true;
  }

  // Allow corporate domains (has at least 2 parts and doesn't end in common TLDs)
  const parts = lowerDomain.split('.');
  if (parts.length >= 2) {
    // Must have valid TLD
    const validTLDs = ['com', 'org', 'net', 'edu', 'gov', 'co', 'io', 'ar', 'mx', 'es', 'pe', 'cl', 'uy', 'py', 'bo', 'ec', 've', 'br'];
    const tld = parts[parts.length - 1];

    // For .ar, .mx, etc. with second level like .com.ar
    if (parts.length >= 3 && validTLDs.includes(tld)) {
      return true;
    }

    return validTLDs.includes(tld);
  }

  return false;
}

export function validateEmail(email: string): { valid: boolean; error?: string; suggestion?: string } {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Formato de email inválido' };
  }

  const [, domain] = email.split('@');

  // Check for typos
  const suggestion = getDomainSuggestion(domain);
  if (suggestion) {
    return {
      valid: false,
      error: `¿Quisiste decir @${suggestion}?`,
      suggestion
    };
  }

  // Check if domain is valid
  if (!isValidDomain(domain)) {
    return {
      valid: false,
      error: 'Dominio de email inválido'
    };
  }

  return { valid: true };
}
