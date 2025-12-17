"use client";
import { useEffect, useState, useRef, type FormEvent } from "react";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-number-input";
import { validateEmail } from "@/lib/validation/emailDomains";
import { validatePhoneNumber } from "@/lib/validation/phoneValidation";

const variants = {
  enter: {
    y: "100%",
    opacity: 0,
  },
  center: {
    y: "0%",
    opacity: 1,
  },
  exit: {
    y: "-100%",
    opacity: 0,
  },
};

const FORMSPREE_URL = "https://formspree.io/f/xqanqbby";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function Hero() {
  const { push } = useRouter();
  const phrases = ["Con tu cultura", "A tu escala", "A una fracción del costo"];

  const [index, setIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const workEmail = formData.get("workEmail") as string;
    const industry = formData.get("industry") as string;
    const country = formData.get("country") as string;
    const employeeCount = formData.get("employeeCount") as string;

    const newErrors: Record<string, string> = {};

    // Validate all required fields
    if (!firstName?.trim()) newErrors.firstName = "Nombre es requerido";
    if (!lastName?.trim()) newErrors.lastName = "Apellido es requerido";
    if (!workEmail?.trim()) newErrors.workEmail = "Email es requerido";
    if (!industry?.trim()) newErrors.industry = "Industria es requerida";
    if (!country?.trim()) newErrors.country = "País es requerido";
    if (!employeeCount?.trim()) newErrors.employeeCount = "Cantidad de empleados es requerida";
    if (!phone?.trim()) newErrors.phone = "Teléfono es requerido";

    // Validate email domain
    if (workEmail) {
      const emailValidation = validateEmail(workEmail);
      if (!emailValidation.valid) {
        newErrors.workEmail = emailValidation.error || "Email inválido";
      }
    }

    // Validate phone number
    if (phone) {
      const phoneValidation = validatePhoneNumber(phone);
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || "Teléfono inválido";
      }
    }

    // Validate reCAPTCHA (only if key is configured)
    if (RECAPTCHA_SITE_KEY) {
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (!recaptchaValue) {
        newErrors.recaptcha = "Por favor, completa el reCAPTCHA";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Verify email exists (optional - fails gracefully)
      if (workEmail) {
        try {
          const verifyResponse = await fetch("/api/verify-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: workEmail }),
          });

          const verifyData = await verifyResponse.json();

          if (!verifyData.valid && !verifyData.skipVerification) {
            newErrors.workEmail = "Este email no parece existir. Por favor, verifica tu dirección de email.";
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
          }
        } catch (error) {
          // If verification fails, continue with submission
          console.warn("Email verification failed, continuing:", error);
        }
      }

      // Add phone to formData
      formData.append("phone", phone);

      if (RECAPTCHA_SITE_KEY) {
        const recaptchaValue = recaptchaRef.current?.getValue();
        if (recaptchaValue) {
          formData.append("recaptchaToken", recaptchaValue);
        }
      }

      await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setShowBubble(true);
      form.reset();
      setPhone("");
      recaptchaRef.current?.reset();
      push("/gracias");

      setTimeout(() => {
        setShowBubble(false);
      }, 3000);
    } catch (error) {
      console.error("Error enviando lead:", error);
      newErrors.submit = "Error al enviar el formulario. Por favor, intenta nuevamente.";
      setErrors(newErrors);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col min-h-svh md:flex-row items-center justify-center px-4 md:px-11 py-8 relative bg-[#e8d8ff]"
    >
      <section className="bg-white absolute rounded-b-4xl top-0 left-10 z-40 md:hidden block p-4 pt-14">
        <Image
          src="/Logos/quippos2.svg"
          alt="Logo"
          className="flex md:hidden max-w-40"
          width={1000}
          height={1000}
          priority
        />
      </section>
      <section className="w-full min-h-[90vh] bg-[#a780f5] text-white rounded-4xl md:rounded-[64px] relative px-10 md:py-0 md:px-40 flex items-center justify-between flex-col md:flex-row pt-32 md:pt-0">
        <div className="copy w-full">
          <Image
            src="/quippos1.png"
            alt="Logo"
            className="hidden md:block object-contain w-full md:max-w-xl xl:max-w-md 2xl:max-w-2xl relative aspect-auto"
            width={1000}
            height={1000}
            priority
          />
          <h2 className="text-[28px] md:text-5xl 2xl:text-7xl font-semibold md:mt-8 leading-none">
            <span className="text-[#27067f] md:text-white">
              Gestioná tu <i>talento</i>
            </span>{" "}
            <br /> como una gran <br /> corporación
          </h2>

          <div className="md:p-2 px-1 py-1 flex items-center w-full md:max-w-md bg-[#9a69f9] rounded-full my-6 md:my-11">
            <span className="bg-[#27067f] rounded-full md:h-9 md:w-9 h-8 w-8  flex items-center justify-center">
              <Plus
                className="md:w-7 md:h-7 h-5 w-5 text-[#f0f0f0]"
                strokeWidth={3}
              />
            </span>

            <div className="ml-3 flex-1 overflow-hidden ">
              <div className="relative md:h-8 h-6 overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.p
                    key={index}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center text-base md:text-3xl md:pl-2 whitespace-nowrap font-medium text-purple-50 leading-6"
                  >
                    {phrases[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-[13px] whitespace-nowrap md:text-2xl leading-tight font-medium">
            Impulsá el crecimiento de tu equipo con <br /> una plataforma HCM
            que integra la gestión <br /> de procesos y mejora la comunicación
            interna.
          </p>
        </div>

        <div className="formulario scale-125 md:scale-100 mt-6 pb-10 relative top-1">
          <Card className="relative py-11 md:w-md px-6 outline-none border-none pb-4 rounded-3xl">
            <CardTitle className="bg-[#27067f] absolute top-0 left-0 font-medium text-sm px-4 rounded-br-full pr-6 md:rounded-br-3xl py-2 md:text-2xl text-white ">
              Solicitar demo gratuita
            </CardTitle>

            <form onSubmit={handleSubmit}>
              <div className="space-y-1 md:space-y-4 mt-1 md:mt-8">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1 md:space-y-2">
                    <Label className="whitespace-nowrap text-xs md:text-base">
                      Nombre <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="firstName"
                      required
                      className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-[10px] md:text-xs">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <Label className="whitespace-nowrap text-xs md:text-base">
                      Apellido <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="lastName"
                      required
                      className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-[10px] md:text-xs">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Email laboral <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="workEmail"
                    type="email"
                    required
                    className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                  />
                  {errors.workEmail && (
                    <p className="text-red-500 text-[10px] md:text-xs">{errors.workEmail}</p>
                  )}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Teléfono <span className="text-red-500">*</span>
                  </Label>
                  <PhoneInput
                    international
                    defaultCountry="AR"
                    countries={["AR", "CO", "PE", "MX", "CL", "UY", "PY", "BO", "EC", "VE"]}
                    value={phone}
                    onChange={(value) => setPhone(value || "")}
                    className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2 phone-input-custom"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[10px] md:text-xs">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    Industria <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="industry"
                    required
                    className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                  />
                  {errors.industry && (
                    <p className="text-red-500 text-[10px] md:text-xs">{errors.industry}</p>
                  )}
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="whitespace-nowrap text-xs md:text-base">
                    País <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="country"
                    required
                    className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-[10px] md:text-xs">{errors.country}</p>
                  )}
                </div>

                {RECAPTCHA_SITE_KEY && (
                  <div className="space-y-1 md:space-y-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      theme="light"
                      size="normal"
                    />
                    {errors.recaptcha && (
                      <p className="text-red-500 text-[10px] md:text-xs">{errors.recaptcha}</p>
                    )}
                  </div>
                )}

                {errors.submit && (
                  <p className="text-red-500 text-xs md:text-sm text-center">{errors.submit}</p>
                )}

                <div className="grid grid-cols-10 gap-2 place-items-center">
                  <div className="space-y-1 md:space-y-2 col-span-6 w-full">
                    <Label className="whitespace-nowrap text-xs md:text-base">
                      Cantidad de Empleados <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="employeeCount"
                      required
                      className="bg-[#f0f0f0] h-8 md:h-auto md:text-base text-sm rounded-full py-1 md:py-2 px-2"
                    />
                    {errors.employeeCount && (
                      <p className="text-red-500 text-[10px] md:text-xs">{errors.employeeCount}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="col-span-4 rounded-full cursor-pointer bg-[#e8d8ff] text-[#27067f] md:py-1 py-1 font-semibold px-1 md:px-2 max-h-max w-full flex items-center justify-between text-xs md:text-2xl md:pl-6 pl-2 relative top-2 md:top-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}{" "}
                    <span className="bg-[#f0f0f0] rounded-full md:h-6 md:w-6 grid place-items-center">
                      <ArrowRight color="#27067f" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <motion.div
        className="absolute bottom-0 right-48 rounded-t-3xl bg-[#27067f] md:flex hidden py-6 px-4 pr-8"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Iconos/SVG/membrete world class.svg"
          alt="Logo"
          width={100}
          height={100}
          className="md:h-14 2xl:h-16"
        />

        <p className="text-[#a780f5] md:text-xl 2xl:text-2xl font-medium">
          Calidad <br />
          World Class
        </p>
      </motion.div>

      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#27067f] text-white rounded-2xl shadow-lg px-4 py-3 text-sm md:text-base flex items-center gap-2"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#a780f5] text-xs font-bold">
              ✓
            </span>
            <span>
              ¡Gracias! Recibimos tu solicitud de demo.{" "}
              <br className="hidden md:block" />
              Nos contactamos pronto ✨
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
