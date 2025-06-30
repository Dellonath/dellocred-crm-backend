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

export enum clientSector {
  // Indicate if the client works in the public or private sector
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

export enum originChannel {
  WEBSITE = 'website',
  SOCIAL_MEDIA = 'social_media',
  IMPORTED = 'imported',
  REFERRAL = 'referral',
  OTHER = 'other'
}

export enum utmSource {
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
  CPC = 'cpc',                 // custo por clique (ads)
  PAID_SOCIAL = 'paid_social', // anúncios em redes sociais
  EMAIL = 'email',             // disparos de e-mail marketing
  SOCIAL = 'social',           // tráfego social orgânico
  ORGANIC = 'organic',         // busca orgânica
  REFERRAL = 'referral',       // link externo de outro site
  DIRECT = 'direct',           // acesso direto (sem origem)
  display = 'display',         // banners e mídia display
  INFLUENCER = 'influencer',   // parceria ou menção
  PUSH = 'push',               // notificações push
  OTHER = 'other'
}