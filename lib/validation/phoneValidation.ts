import { parsePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';

// Countries where Quippos operates (based on CSV data)
export const SUPPORTED_COUNTRIES = ['AR', 'CO', 'PE', 'MX', 'CL', 'UY', 'PY', 'BO', 'EC', 'VE'] as const;

export type SupportedCountry = typeof SUPPORTED_COUNTRIES[number];

// Phone number length ranges for each country
const PHONE_LENGTH_RANGES: Record<SupportedCountry, { min: number; max: number }> = {
  AR: { min: 10, max: 13 }, // Argentina: 10-11 digits + country code
  CO: { min: 10, max: 13 }, // Colombia: 10 digits + country code
  PE: { min: 9, max: 12 },  // Peru: 9 digits + country code
  MX: { min: 10, max: 13 }, // Mexico: 10 digits + country code
  CL: { min: 9, max: 12 },  // Chile: 9 digits + country code
  UY: { min: 8, max: 11 },  // Uruguay: 8-9 digits + country code
  PY: { min: 9, max: 12 },  // Paraguay: 9 digits + country code
  BO: { min: 8, max: 11 },  // Bolivia: 8 digits + country code
  EC: { min: 9, max: 12 },  // Ecuador: 9 digits + country code
  VE: { min: 10, max: 13 }, // Venezuela: 10 digits + country code
};

export function validatePhoneNumber(phone: string, country?: SupportedCountry): { valid: boolean; error?: string } {
  if (!phone || phone.trim() === '') {
    return { valid: false, error: 'Número de teléfono requerido' };
  }

  try {
    // Check if it's a valid phone number format
    if (!isValidPhoneNumber(phone)) {
      return { valid: false, error: 'Número de teléfono inválido' };
    }

    const phoneNumber = parsePhoneNumber(phone);

    if (!phoneNumber) {
      return { valid: false, error: 'No se pudo validar el número de teléfono' };
    }

    // If country is specified, validate against that country's ranges
    if (country && SUPPORTED_COUNTRIES.includes(country)) {
      const range = PHONE_LENGTH_RANGES[country];
      const nationalNumber = phoneNumber.nationalNumber;
      const numberLength = nationalNumber.length;

      if (numberLength < range.min || numberLength > range.max) {
        return {
          valid: false,
          error: `El número debe tener entre ${range.min} y ${range.max} dígitos`
        };
      }
    }

    return { valid: true };
  } catch (error) {
    return { valid: false, error: 'Número de teléfono inválido' };
  }
}

export function formatPhoneNumberForDisplay(phone: string): string {
  try {
    const phoneNumber = parsePhoneNumber(phone);
    return phoneNumber ? phoneNumber.formatInternational() : phone;
  } catch {
    return phone;
  }
}
