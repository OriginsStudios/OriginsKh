

import { Dispatch, SetStateAction } from "react";

type SubscriptionStatus = {
  success: boolean;
  message: string;
} | null;

export async function handleSubscribe(
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  setSubscriptionStatus: Dispatch<SetStateAction<SubscriptionStatus>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) {
  // Basic email validation
  if (!email || !email.includes("@") || !email.includes(".")) {
    setSubscriptionStatus({ success: false, message: "Please enter a valid email address" });
    return;
  }

  setIsLoading(true);
  setSubscriptionStatus(null);

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Subscription failed');
    }

    setSubscriptionStatus({
      success: true,
      message: "Thank you for subscribing to our newsletter!"
    });
    setEmail(""); // Clear input on success
    setTimeout(() => {
      setSubscriptionStatus(null);
    }, 5000); // Clear message after 5 seconds
  } catch (error) {
    setSubscriptionStatus({
      success: false,
      message: error instanceof Error ? error.message : "Subscription failed. Please try again later."
    });
  } finally {
    setIsLoading(false);
  }
}