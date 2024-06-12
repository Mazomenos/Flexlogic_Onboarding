//
// EDI ELEMENTS

import { Delimiters_enum, DocType_enum, Version_enum, EOL_enum} from "@prisma/client";

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
  Doc: DocType_enum;
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
  Conditions?: any[]
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
  Doc: DocType_enum;
  instructionsPDF: string;
  isVisible: boolean;
  isRequired: boolean;
};
export interface TradingPartner {
  id: string;
  Name: string;
  Initial850EDI: string;
  Delimiters: Delimiters_enum[];
  Version: Version_enum;
  EOL: EOL_enum[];
  isVisible: boolean;
  DocsRequired: DocumentsRequired[];
}

//
// USERS
//
type Error = {
  Title: string;
  Description: string;
  Position: string;
  Type: string;
};
type PartnershipDocs = {
  idDoc: string;
  Doc: string;
  DocFile: string;
  isRequired: boolean;
  Status: string;
  LogErrors: Error[];
};
type UserPartnerships = {
  idPartner: string;
  Name: string,
  Status: string;
  Docs: PartnershipDocs[];
};
export interface User {
  Partnerships: UserPartnerships[];
}
