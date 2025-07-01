export enum state {
  // List of Brazilian states
  // North
  AC = 'ac', AP = 'ap', AM = 'am', PA = 'pa', RO = 'ro', RR = 'rr', TO = 'to',
  // Northeast
  AL = 'al', BA = 'ba', CE = 'ce', MA = 'ma', PB = 'pb', PE = 'pe', PI = 'pi', RN = 'rn', SE = 'se',
  // Central-West
  DF = 'df', GO = 'go', MT = 'mt', MS = 'ms',
  // Southeast
  ES = 'es', MG = 'mg', RJ = 'rj', SP = 'sp',
  // South
  PR = 'pr', RS = 'rs', SC = 'sc'
}

// Indicate if the client works in the public or private sector
export enum clientSector {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export enum gender {
  MALE = 'm',
  FEMALE = 'f'
}

export enum maritialStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'windowed'
}

export enum educationLevel {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  HIGH_SCHOOL = 'high_school',
  BACHELOR = 'bachelor',
  MASTER = 'master',
  DOCTORATE = 'doctorate'
}

// Indicate if the client came from either online or offline channel
export enum AcquisitionChannelType {
  ONLINE = 'online',
  OFFLINE = 'offline'
}

export enum utmSource {
  WEBSITE = 'website',
  IMPORTED = 'imported',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
  TIKTOK = 'tiktok',
  NEWLATTER = 'newsletter',
  REFERRAL = 'referral',
  DIRECT = 'direct',
  WHATSAPP = 'whatsapp',
  EMAIL = 'email',
  ORGANIC = 'organic',
  OTHER = 'other'
}

export enum utmMedium {
  CPC = 'cpc',                 // cost per click (ads)
  PAID_SOCIAL = 'paid_social', // social media ads
  EMAIL = 'email',             // email marketing campaigns
  SOCIAL = 'social',           // organic social traffic
  ORGANIC = 'organic',         // organic search
  REFERRAL = 'referral',       // external link from another site
  DIRECT = 'direct',           // direct access (no source)
  display = 'display',         // banners and display media
  INFLUENCER = 'influencer',   // partnership or mention
  PUSH = 'push',               // push notifications
  OTHER = 'other'
}