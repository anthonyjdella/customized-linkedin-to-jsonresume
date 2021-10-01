/** @type {Required<ResumeSchemaStable>} */
export const resumeJsonTemplateStable = {
    basics: {
        name: '',
        label: '',
        picture: '',
        email: '',
        phone: '',
        website: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: []
};

/** @type {Required<ResumeSchemaLatest>} */
export const resumeJsonTemplateLatest = {
    $schema: 'https://raw.githubusercontent.com/anthonyjdella/customized-resume-schema/main/schema.json',
    basics: {
        name: '',
        label: '',
        image: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    leadership: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: [],
    meta: {
        version: 'v1.0.0',
        canonical: 'https://github.com/anthonyjdella/customized-resume-schema/blob/main/schema.json'
    }
};

/**
 * Beta can be combined with latest, so this is a partial (diff)
 * @type {Partial<ResumeSchemaBeyondSpec>}
 */
export const resumeJsonTemplateBetaPartial = {
    certificates: []
};
