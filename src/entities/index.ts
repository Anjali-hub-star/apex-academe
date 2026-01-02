/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: courses
 * Interface for Courses
 */
export interface Courses {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  courseName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType image */
  courseImage?: string;
  /** @wixFieldType url */
  enrollmentUrl?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType text */
  programType?: string;
}


/**
 * Collection ID: eventsandannouncements
 * Interface for EventsandAnnouncements
 */
export interface EventsandAnnouncements {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  date?: Date | string;
  /** @wixFieldType time */
  time?: any;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType image */
  image?: string;
  /** @wixFieldType text */
  eventType?: string;
  /** @wixFieldType url */
  externalLink?: string;
}


/**
 * Collection ID: facilities
 * Interface for Facilities
 */
export interface Facilities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  facilityName?: string;
  /** @wixFieldType image */
  facilityImage?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  capacity?: number;
  /** @wixFieldType text */
  location?: string;
}


/**
 * Collection ID: galleryphotos
 * Interface for GalleryPhotos
 */
export interface GalleryPhotos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType image */
  photo?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType date */
  dateUploaded?: Date | string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType image */
  personPhoto?: string;
  /** @wixFieldType date */
  dateGiven?: Date | string;
}
