export function isemailorphone(input: string): string {
  // Regular expression to match email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^\d{10}$/;

  if (emailRegex.test(input)) {
    return "email";
  }

  if (phoneRegex.test(input)) {
    return "phone";
  }
  return "none";
}

