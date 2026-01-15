import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "form_submit"
  | "content_view";

export type AnalyticsEventProps = Record<
  string,
  string | number | boolean | null | undefined
>;

export const trackEvent = (name: AnalyticsEvent, props?: AnalyticsEventProps) => {
  track(name, props);
};
