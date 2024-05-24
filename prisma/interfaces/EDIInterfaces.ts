//
// EDI ELEMENTS
//
export interface EDIElement {
  Element: string;
  Name: string;
  Type: string;
  Min: number;
  Max: number;
  Version: string;
}

//
// EDI SEGMENTS
//
type EDISegmentElement = {
  Position: string;
  Element: string;
  Requirement: string;
  Composites?: EDISegmentElement[];
};

export interface EDISegment {
  Segment: string;
  Name: string;
  Version: string;
  Elements: EDISegmentElement[];
}

//
// EDI TEMPLATE DOCUMENTS
//
type EDITemplateSegment = {
  Position: number;
  Segment: string;
  Requirement: string;
  Max: string;
  Segments?: EDITemplateSegment[];
};
export interface EDITemplateDocument {
  Doc: number;
  Version: string;
  Segments: EDITemplateSegment[];
}

//
// EDI TRADING PARTNER DOCS
//
type EDITPSegmentElement = {
  Position: string;
  Element: string;
  Requirement: string;
  Type: string;
  Min: number;
  Max: number;
};
type EDITPSegment = {
  Position: number;
  Segment: string;
  Requirement: string;
  Max: string;
  Elements?: EDITPSegmentElement[];
  Segments?: EDITPSegment[];
};
export interface EDITPDocument {
  id: string;
  Segments: EDITPSegment[];
}

//
// TRADING PARTNERS
//
type DocumentsRequired = {
  idDoc: string;
  Doc: string;
  Version: string;
  isVisible: boolean;
};
export interface TradingPartner {
  id: string;
  Name: string;
  Initial850EDI: string;
  Delimiters: string[];
  EDIVersion: string;
  EOL: string;
  DocsRequired: DocumentsRequired[];
}

//
// USERS
//
type Error = {
  Position: string;
  Comments: string;
};
type PartnershipDocs = {
  Doc: string;
  Status: string;
  LogErrors: Error[];
};
type UserPartnerships = {
  idPartner: string;
  Docs: PartnershipDocs[];
};
export interface User {
  Partnerships: UserPartnerships[];
}