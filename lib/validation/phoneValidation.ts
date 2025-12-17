// Countries where Quippos operates (based on CSV data)
export const SUPPORTED_COUNTRIES = ['AR', 'CO', 'PE', 'MX', 'CL', 'UY', 'PY', 'BO', 'EC', 'VE'] as const;

export type SupportedCountry = typeof SUPPORTED_COUNTRIES[number];

// Phone number length ranges for each country (national number only, without country code)
const PHONE_LENGTH_RANGES: Record<string, { min: number; max: number }> = {
  '+54': { min: 10, max: 11 }, // Argentina
  '+57': { min: 10, max: 10 }, // Colombia
  '+51': { min: 9, max: 9 },   // Peru
  '+52': { min: 10, max: 10 }, // Mexico
  '+56': { min: 9, max: 9 },   // Chile
  '+598': { min: 8, max: 9 },  // Uruguay
  '+595': { min: 9, max: 9 },  // Paraguay
  '+591': { min: 8, max: 8 },  // Bolivia
  '+593': { min: 9, max: 9 },  // Ecuador
  '+58': { min: 10, max: 10 }, // Venezuela
};

export function validatePhoneNumber(phone: string): { valid: boolean; error?: string } {
  if (!phone || phone.trim() === '') {
    return { valid: false, error: 'Número de teléfono requerido' };
  }

  // Check if phone starts with a valid country code
  const countryCode = Object.keys(PHONE_LENGTH_RANGES).find(code => phone.startsWith(code));

  if (!countryCode) {
    return { valid: false, error: 'Código de país inválido' };
  }

  // Extract the national number (digits only after country code)
  const nationalNumber = phone.slice(countryCode.length).replace(/\D/g, '');

  if (!nationalNumber) {
    return { valid: false, error: 'Número de teléfono requerido' };
  }

  // Validate length based on country
  const range = PHONE_LENGTH_RANGES[countryCode];
  const numberLength = nationalNumber.length;

  if (numberLength < range.min || numberLength > range.max) {
    return {
      valid: false,
      error: `El número debe tener entre ${range.min} y ${range.max} dígitos`
    };
  }

  // Check if it contains only digits
  if (!/^\d+$/.test(nationalNumber)) {
    return { valid: false, error: 'El número solo puede contener dígitos' };
  }

  return { valid: true };
}
