"use client";

import { Input } from "./input";
import { Label } from "./label";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const COUNTRY_CODES = [
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Perú" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "México" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
  { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
  { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
  { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
];

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  // Extract country code and number from value
  const getCountryCodeAndNumber = (fullNumber: string) => {
    const matchedCountry = COUNTRY_CODES.find((c) =>
      fullNumber.startsWith(c.code)
    );
    if (matchedCountry) {
      return {
        countryCode: matchedCountry.code,
        number: fullNumber.slice(matchedCountry.code.length).trim(),
      };
    }
    return { countryCode: "+54", number: fullNumber };
  };

  const { countryCode, number } = getCountryCodeAndNumber(value);

  const handleCountryCodeChange = (newCode: string) => {
    onChange(`${newCode}${number}`);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value.replace(/\D/g, ""); // Only digits
    onChange(`${countryCode}${newNumber}`);
  };

  return (
    <div className="space-y-1 md:space-y-2">
      <Label className="whitespace-nowrap text-xs md:text-base">
        Teléfono <span className="text-red-500">*</span>
      </Label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => handleCountryCodeChange(e.target.value)}
          className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2 border-none outline-none cursor-pointer"
          style={{ width: "auto", minWidth: "80px" }}
        >
          {COUNTRY_CODES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.code}
            </option>
          ))}
        </select>
        <Input
          type="tel"
          value={number}
          onChange={handleNumberChange}
          placeholder="Número de teléfono"
          required
          className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2 flex-1"
        />
      </div>
      {error && <p className="text-red-500 text-[10px] md:text-xs">{error}</p>}
    </div>
  );
}
