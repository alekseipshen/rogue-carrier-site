/**
 * A2P 10DLC review mode.
 *
 * While `true`, the site HIDES all native phone-collecting forms (Quick Apply,
 * full Apply, Contact) and shows the GHL / LeadConnector text opt-in widget as the
 * ONLY phone opt-in on the site. This lets us truthfully confirm GHL's
 * "only the chat widget collects phone numbers for SMS opt-in" compliance checkbox
 * during A2P (10DLC) campaign registration.
 *
 * REVERT: set this to `false` once the A2P campaign is APPROVED. That restores the
 * native forms and removes the widget. Also remember to resume the paused driver
 * Google Ads campaigns. The Privacy Policy and SMS Terms pages are permanent and
 * stay live regardless of this flag.
 */
export const A2P_REVIEW_MODE = true;
