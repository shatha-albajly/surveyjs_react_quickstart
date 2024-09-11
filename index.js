const surveyJson = {

    pages: [
        {
            name: "page1",
            title: "Terms and Conditions",
            elements: [{
                type: "boolean",
                name: "page1_termsAndConditions",
                title: "I have read and agree to the terms and conditions",
                renderAs: "checkbox",
                isRequired: true,
                requiredErrorText: "I have read and agree to the terms and conditions' is a required field"
            }]

        },
        {
            name: "page2",
            title: "Application context",
            elements: [{
                type: "dropdown",
                name: "page2_applicationContext_currentLocation",
                title: "Current location",
                isRequired: true,
                requiredErrorText: "'Current location' is a required field.",


                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }

            }, {
                type: "dropdown",
                name: "page2_applicationContext_legalStatus",
                title: "Legal status",
                visibleIf: "{page2_applicationContext_currentLocation} != ''",
                isRequired: true,
                requiredErrorText: "'Legal status' is a required field.",
                choices: [
                    { "value": "1", "text": "Citizen" },
                    { "value": "2", "text": "Permanent Resident" },
                    { "value": "3", "text": "Visitor" },
                    { "value": "4", "text": "Student" },
                    { "value": "5", "text": "Work Visa" },
                    { "value": "7", "text": "No Legal Status" },
                    { "value": "99", "text": "Other" }
                ]
            }, {
                type: "comment",
                name: "giveDetails",
                title: "Give details of why the applicant is at their current location, including the end date of their current visa.",
                visibleIf: "{page2_applicationContext_legalStatus} != '' and  {page2_applicationContext_legalStatus} != '1'",
                requiredErrorText: "'Give details of why the applicant is at their current location, including the end date of their current visa.' is a required field.",
                validators: [{
                    type: "text",
                    maxLength: 300,
                    text: "Give details of why the applicant is at their current location, including the end date of their current visa. is limited to 300 characters"


                }]

            }, {

                "type": "radiogroup",
                "name": "page2_applicationContext_isFirstTime",
                "title": 'Is this the first time the applicant is applying for a student visa?',

                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "separateSpecialChoices": true,
                "isRequired": true,
                "requiredErrorText": "'Is this the first time the applicant is applying for a student visa?' is a required field.",
            }, {

                "type": "radiogroup",
                "name": "page2_applicationContext_isDeferred",
                "title": 'Is the applicant applying for this visa because their study in Australia has been deferred due to COVID-19?',

                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "separateSpecialChoices": true,
                "isRequired": true,
                "requiredErrorText": "'Is the applicant applying for this visa because their study in Australia has been deferred due to COVID-19?' is a required field.",
            },
            {
                type: "html",
                name: "message",
                html: "<p>The applicant will be required to provide a supporting letter from their education provider.</p>",
                visibleIf: "{page2_applicationContext_isDeferred} = yes"
            }, {

                "type": "radiogroup",
                "name": "page2_applicationContext_isCoe",
                "title": 'Does the applicant hold a Confirmation of Enrolment (CoE) for any intended course of study in Australia?',
                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "separateSpecialChoices": true,
                "isRequired": true,
                "requiredErrorText": "'Does the applicant hold a Confirmation of Enrolment (CoE) for any intended course of study in Australia?' is a required field.",
            },
            {
                "type": "paneldynamic",
                "name": "page2_applicationContext_isCoeDetails",
                "title": "Add details",
                "visibleIf": "{page2_applicationContext_isCoe} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        "type": "text",
                        "name": "page2_confirmationOfEnrolment_coeCode",
                        "title": "CoE code",
                        "isRequired": true,
                        "requiredErrorText": "'CoE code' is a required field.",
                    },
                    {
                        "type": "boolean",
                        "name": "page2_confirmationOfEnrolment_isContinuation",
                        "title": "Is this course a continuation of the applicant's studies or training outside Australia?",
                        "isRequired": true,
                        "requiredErrorText": "'Is this course a continuation of the applicant's studies or training outside Australia?' is a required field."
                    },]
            },
            {

                "type": "radiogroup",
                "name": "page2_applicationContext_isCoeOther",
                "title": 'Does the applicant hold evidence of their intended study in Australia other than a CoE?',
                "description": 'Note: Do not add a Letter of offer for a course that has already been included in the Confirmation of enrolment section above. Adding a CoE and a Letter of offer for the same course is unnecessary and may lead to delays in processing the application.',
                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "separateSpecialChoices": true,
                "isRequired": true,
                "requiredErrorText": "'Does the applicant hold evidence of their intended study in Australia other than a CoE?' is a required field.",
            },
            {
                "type": "paneldynamic",
                "name": "page2_applicationContext_coeDetails",
                "title": "Add details",
                "visibleIf": "{page2_applicationContext_isCoeOther} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        "type": "dropdown",
                        "name": "page2_otherEvidence_evidenceType",
                        "title": "Evidence type",
                        "isRequired": true,
                        "requiredErrorText": "'Evidence type' is a required field.",
                        "choices": [
                            {
                                "value": "1",
                                "text": "Letter of offer"
                            }, {
                                "value": "2",
                                "text": "Acceptance Advice of Secondary Exchange Student (AASES)"
                            }, {
                                "value": "3",
                                "text": "Letter for postgraduate thesis marking"
                            }, {
                                "value": "4",
                                "text": "Department of Foreign Affairs and Trade letter of support"
                            }, {
                                "value": "5",
                                "text": "Department of Defence letter of support"
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "name": "page2_otherEvidence_courseCode",
                        "title": "Course code",
                        "isRequired": true,
                        "requiredErrorText": "'Course code' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1"
                    },
                    {
                        "type": "text",
                        "name": "page2_otherEvidence_courseName",
                        "title": "Course name",
                        "isRequired": true,
                        "requiredErrorText": "'Course name' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1 or {panel.page2_otherEvidence_evidenceType} = 3 or {panel.page2_otherEvidence_evidenceType} = 4 or {panel.page2_otherEvidence_evidenceType} = 5"
                    },
                    {
                        "type": "text",
                        "name": "page2_otherEvidence_educationProviderCode",
                        "title": "Education provider code",
                        "isRequired": true,
                        "requiredErrorText": "'Education provider code' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1 "
                    },
                    {
                        "type": "text",
                        "name": "page2_otherEvidence_educationProviderName",
                        "title": "Education provider name",
                        "isRequired": true,
                        "requiredErrorText": "'Education provider name' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1 or {panel.page2_otherEvidence_evidenceType} = 3 or {panel.page2_otherEvidence_evidenceType} = 4 or {panel.page2_otherEvidence_evidenceType} = 5"
                    },
                    {
                        "type": "text",
                        "inputType": "date",
                        "name": "page2_otherEvidence_evidenceDate",
                        "title": "Course commencement date",
                        "isRequired": true,
                        "minValueExpression": "today()",
                        "requiredErrorText": "'Course commencement date' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1 or {panel.page2_otherEvidence_evidenceType} = 2 or {panel.page2_otherEvidence_evidenceType} = 4 or {panel.page2_otherEvidence_evidenceType} = 5"
                    },
                    {
                        "type": "text",
                        "inputType": "date",
                        "name": "page2_otherEvidence_evidenceEndDate",
                        "title": "Course completion date",
                        "isRequired": true,
                        "minValueExpression": "today()",
                        "requiredErrorText": "'Course completion date' is a required field.",
                        "visibleIf": "{panel.page2_otherEvidence_evidenceType} = 1 or {panel.page2_otherEvidence_evidenceType} = 2 or {panel.page2_otherEvidence_evidenceType} = 4 or {panel.page2_otherEvidence_evidenceType} = 5"
                    },

                    {
                        "type": "boolean",
                        "name": "page2_otherEvidence_isContinuation",
                        "title": "Is this course a continuation of the applicant's studies or training outside Australia?",
                        "isRequired": true,
                        "requiredErrorText": "'Is this course a continuation of the applicant's studies or training outside Australia?' is a required field."


                    },]




            },
            {
                type: "dropdown",
                name: "page2_applicationContext_educationSector",
                title: "Select the education sector of the applicant's principal course.",
                isRequired: true,
                requiredErrorText: "'Education sector' is a required field.",
                choices: [
                    { "value": "47", "text": "Foreign Affairs or Defence Sector" },
                    { "value": "44", "text": "Higher Education Sector" },
                    { "value": "41", "text": "Independent ELICOS Sector" },
                    { "value": "46", "text": "Non-Award Sector" },
                    { "value": "45", "text": "Postgraduate Research Sector" },
                    { "value": "42", "text": "Schools Sector" },
                    { "value": "43", "text": "Vocational Education and Training Sector" }
                ]
            },
            {

                "type": "radiogroup",
                "name": "page2_applicationContext_isVisaClosed",
                "title": 'Is the applicant applying for this visa due to the closure of their Australian education provider?',
                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "isRequired": true,
                "requiredErrorText": "'Is the applicant applying for this visa due to the closure of their Australian education provider?' is a required field.",
            },
            {

                "type": "radiogroup",
                "name": "page2_applicationContext_partialOrFullFunding",
                "title": 'Is the applicant receiving partial or full funding under a training scheme approved by the Commonwealth government of Australia?',
                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
                "isRequired": true,
                "requiredErrorText": "'Is the applicant receiving partial or full funding under a training scheme approved by the Commonwealth government of Australia?' is a required field.",
            },]

        },
        {
            name: "page3",
            title: "Primary applicant",
            description: "Information: Entering names incorrectly may result in denial of permission to board an aircraft to Australia, or result in delays in border processing on arrival to Australia, even if the applicant has been granted a visa.",
            elements: [
                {
                    type: "text",
                    name: "page3_passportDetails_firstName",
                    title: "Family name",
                    isRequired: true,
                    requiredErrorText: "'Family name' is a required field."
                },
                {
                    type: "text",
                    name: "page3_passportDetails_givenNames",
                    title: "Given names",
                    isRequired: true,
                    requiredErrorText: "'Given names' is a required field."
                },
                {
                    type: "radiogroup",
                    name: "page3_passportDetails_sex",
                    title: "Sex",
                    isRequired: true,
                    requiredErrorText: "'Sex' is a required field.",
                    choices: ["Male", "Female", "Other"]
                },
                {
                    type: "text",
                    name: "page3_passportDetails_dateOfBirth",
                    title: "Date of birth",
                    isRequired: true,
                    requiredErrorText: "'Date of birth' is a required field.",
                    "inputType": "date",
                    "isRequired": true,
                    "maxValueExpression": "today()",
                },
                {
                    type: "text",
                    name: "page3_passportDetails_passportNumber",
                    title: "Passport number",
                    isRequired: true,
                    requiredErrorText: "'Passport number' is a required field."
                },
                {
                    type: "dropdown",
                    name: "page3_passportDetails_countryOfPassport",
                    title: "Country of passport",
                    isRequired: true,
                    requiredErrorText: "'Country of passport' is a required field.",


                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    }
                },
                {
                    type: "dropdown",
                    name: "page3_passportDetails_nationalityOfPassport",
                    title: "Nationality of passport holder",
                    isRequired: true,
                    requiredErrorText: "'Nationality of passport holder' is a required field.",


                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    }
                }, {
                    type: "text",
                    name: "page3_passportDetails_dateOfIssue",
                    title: "Date of issue",
                    isRequired: true,
                    requiredErrorText: "'Date of issue' is a required field.",
                    "inputType": "date",
                    "isRequired": true,
                    "maxValueExpression": "today()",
                }, {
                    type: "text",
                    name: "page3_passportDetails_dateOfExpiry",
                    title: "Date of expiry",
                    isRequired: true,
                    requiredErrorText: "'Date of expiry' is a required field.",
                    "inputType": "date",
                    "isRequired": true,
                    "minValueExpression": "today()",
                }, {
                    type: "text",
                    name: "page3_passportDetails_placeOfIssue",
                    title: "Place of issue / issuing authority",
                    isRequired: true,
                    requiredErrorText: "'Place of issue / issuing authority' is a required field.",
                },
                {
                    type: "radiogroup",
                    name: "page3_nationalIdentityCard",
                    title: "Does this applicant have a national identity card?",
                    isRequired: true,
                    requiredErrorText: "'Does this applicant have a national identity card?' is a required field.",
                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }]
                    ,
                },
                {
                    "type": "paneldynamic",
                    "name": "page3_nationalIdentityCard_details",
                    "title": "Add details",
                    "visibleIf": "{page3_nationalIdentityCard} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page3_nationalIdentityCard_details_familyName",
                            "title": "Family name",
                            "isRequired": true,
                            "requiredErrorText": "'Family name' is a required field.",
                        },
                        {
                            "type": "text",
                            "name": "page3_nationalIdentityCard_details_givenNames",
                            "title": "Given names",
                            "isRequired": true,
                            "requiredErrorText": "'Given names' is a required field.",
                        },
                        {
                            "type": "text",
                            "name": "page3_nationalIdentityCard_details_identificationNumber",
                            "title": "Identification number",
                            "isRequired": true,
                            "requiredErrorText": "'Identification number' is a required field.",
                        },
                        {
                            'type': "dropdown",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            },
                            "name": "page3_nationalIdentityCard_details_countryOfBirth",
                            "title": "Country of issue",
                            "isRequired": true,
                            "requiredErrorText": "'Country of issue' is a required field.",


                        }, {
                            "type": "text",
                            "name": "page3_nationalIdentityCard_details_dateOfIssue",
                            "title": "Date of issue",
                            "isRequired": true,
                            "requiredErrorText": "'Date of issue' is a required field.",
                            "inputType": "date",
                            "isRequired": true,
                            "maxValueExpression": "today()",
                        }, {

                            "type": "text",
                            "name": "page3_nationalIdentityCard_details_dateOfExpiry",
                            "title": "Date of expiry",
                            "isRequired": true,
                            "requiredErrorText": "'Date of expiry' is a required field.",
                            "inputType": "date",
                            "isRequired": true,
                            "minValueExpression": "today()",
                        }]
                },
                {
                    "type": "text",
                    "name": "page3_placeOfBirth_townCity",
                    "title": "Town / City",
                    "isRequired": true,
                    "requiredErrorText": "'Town / City' is a required field.",
                },
                {
                    "type": "text",
                    "name": "page3_placeOfBirth_stateProvince",
                    "title": "State / Province",
                    "isRequired": true,
                    "requiredErrorText": "'Identification number' is a required field.",
                },
                {
                    'type': "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    "name": "page3_placeOfBirth_countryOfBirth",
                    "title": "Country of birth",
                    "isRequired": true,
                    "requiredErrorText": "'Country of birth' is a required field.",
                },

                {
                    "type": "dropdown",
                    name: "page2_relationshipStatus",
                    title: "Relationship status",
                    isRequired: true,
                    requiredErrorText: "'Relationship status' is a required field.",
                    choices: [
                        { "value": "1", "text": "De Facto" },
                        { "value": "2", "text": "Divorced" },
                        { "value": "3", "text": "Engaged" },
                        { "value": "4", "text": "Married" },
                        { "value": "5", "text": "Never Married" },
                        { "value": "6", "text": "Separated" },
                        { "value": "7", "text": "Widowed" }
                    ]
                }, {
                    type: "radiogroup",
                    name: "page3_otherNames",
                    title: "Is this applicant currently, or have they ever been known by any other names?",
                    isRequired: true,
                    requiredErrorText: "'Is this applicant currently, or have they ever been known by any other names?' is a required field.",
                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }]
                    ,
                },
                {
                    "type": "paneldynamic",
                    "name": "page3_otherNames_details",
                    "title": "Add details",
                    "visibleIf": "{page3_otherNames} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page3_otherNames_details_familyName",
                            "title": "Family name",
                            "isRequired": true,
                            "requiredErrorText": "'Family name' is a required field.",
                        },
                        {
                            "type": "text",
                            "name": "page3_otherNames_details_givenNames",
                            "title": "Given names",
                            "isRequired": true,
                            "requiredErrorText": "'Given names' is a required field.",
                        },

                        {
                            'type': "dropdown",
                            'choices': [{ "value": "1", "text": "Deed Poll" }, { "value": "2", "text": "Marriage" }, { "value": "3", "text": "Other" }],
                            "name": "page3_otherNames_details_reasonForNameChange",
                            "title": "Reason for name change",
                            "isRequired": true,
                            "requiredErrorText": "'Reason for name change' is a required field.",
                        }]
                },
                {
                    "type": "radiogroup",
                    "name": "page3_citizenOfPassport",
                    "title": "Is this applicant a citizen of the selected country of passport?",
                    isRequired: true,
                    requiredErrorText: "'Is this applicant a citizen of the selected country of passport?' is a required field.",

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }]
                },
                {
                    'type': "radiogroup",
                    "name": "page3_citizenOfOtherCountry",
                    "title": "Is this applicant a citizen of any other country?",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Is this applicant a citizen of any other country?' is a required field.",
                },
                {
                    "type": "paneldynamic",
                    "name": "page3_citizenOfOtherCountry_countries",
                    "title": "Add country",
                    "visibleIf": "{page3_citizenOfOtherCountry} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            'type': "dropdown",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            },
                            "name": "page3_citizenOfOtherCountry_country",
                            "title": "List countries",
                            "isRequired": true,
                            "requiredErrorText": "'List countries' is a required field.",
                        }]
                },
                {
                    'type': "radiogroup",
                    "name": "page3_citizenship_stateless",
                    "title": "Is this applicant currently stateless?",
                    "visibleIf": "{page3_citizenOfPassport} = no and {page3_citizenOfOtherCountry} = no",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Is this applicant currently stateless?' is a required field.",
                },
                {
                    "type": "comment",
                    "name": "page3_citizenship_stateless_details",
                    "title": "The responses to the questions above indicate that this applicant holds no citizenship and is not stateless. If this is not correct, then amend the answers above. If this is correct, give details as to why the applicant is not a citizen of any country and is not stateless.",
                    "visibleIf": "{page3_citizenship_stateless} = no",
                    "isRequired": true,
                    "requiredErrorText": "'details' is a required field.",
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },

                {
                    'type': "radiogroup",
                    "name": "page3_otherPassports",
                    "title": "Does this applicant have other current passports?",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Does this applicant have other current passports?' is a required field.",
                },
                {
                    'type': "radiogroup",
                    "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer",
                    "title": "Does the applicant intend to travel on a United Nations Laissez-Passer?",
                    "visibleIf": "{page3_otherPassports} = yes",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Does the applicant intend to travel on a United Nations Laissez-Passer?' is a required field.",
                },
                {
                    "type": "paneldynamic",
                    "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_passports",
                    "title": "Add details",
                    "visibleIf": "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = no",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_familyName",
                            "title": "Family name",
                            "isRequired": true,
                            "requiredErrorText": "'Family name' is a required field.",
                        }, {
                            "type": "text",
                            "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_givenNames",
                            "title": "Given names",
                            "isRequired": true,
                            "requiredErrorText": "'Given names' is a required field.",
                        }, {
                            type: "radiogroup",
                            name: "ppage3_otherPassports_travel_with_United_Nations_Laissez_Passer_sex",
                            title: "Sex",
                            isRequired: true,
                            requiredErrorText: "'Sex' is a required field.",
                            choices: ["Male", "Female", "Other"]
                        }
                        , {
                            type: "text",
                            name: "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_dateOfBirth",
                            title: "Date of birth",
                            isRequired: true,
                            requiredErrorText: "'Date of birth' is a required field.",
                            "inputType": "date",
                            "maxValueExpression": "today()",
                        },
                        {
                            type: "text",
                            name: "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_passportNumber",
                            title: "Passport number",
                            isRequired: true,
                            requiredErrorText: "'Passport number' is a required field.",
                        }, {
                            'type': "dropdown",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            },
                            "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_countryOfPassport",
                            "title": "Country of passport",
                            "isRequired": true,
                            "requiredErrorText": "'Country of passport' is a required field.",
                        }, {
                            'type': "dropdown",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            },
                            "name": "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_nationalityOfPassportHolder",
                            "title": "Nationality of passport holder",
                            "isRequired": true,
                            "requiredErrorText": "'Nationality of passport holder' is a required field.",
                        }, {
                            type: "text",
                            name: "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_dateOfIssue",
                            title: "Date of issue",
                            isRequired: true,
                            requiredErrorText: "'Date of issue' is a required field.",
                            "inputType": "date",
                            "isRequired": true,
                            "maxValueExpression": "today()",
                        }, {
                            type: "text",
                            name: "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_dateOfExpiry",
                            title: "Date of expiry",
                            isRequired: true,
                            requiredErrorText: "'Date of expiry' is a required field.",
                            "inputType": "date",
                            "isRequired": true,
                            "minValueExpression": "today()",
                        }, {
                            type: "text",
                            name: "page3_otherPassports_travel_with_United_Nations_Laissez_Passer_placeOfIssue",
                            title: "Place of issue / issuing authority",
                            isRequired: true,
                            requiredErrorText: "'Place of issue' is a required field.",
                        }]
                },

                {
                    "type": "text",
                    "name": "page3_otherPassports_familyName",
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    "title": "Family name",
                    "isRequired": true,
                    "requiredErrorText": "'Family name' is a required field.",
                }, {
                    "type": "text",
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    "name": "page3_otherPassports_givenNames",
                    "title": "Given names",
                    "isRequired": true,
                    "requiredErrorText": "'Given names' is a required field.",
                }, {
                    type: "radiogroup",
                    name: "page3_otherPassports_sex",
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    title: "Sex",
                    isRequired: true,
                    requiredErrorText: "'Sex' is a required field.",
                    choices: ["Male", "Female", "Other"]
                }
                , {
                    type: "text",
                    name: "page3_otherPassports_dateOfBirth",
                    title: "Date of birth",
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    isRequired: true,
                    requiredErrorText: "'Date of birth' is a required field.",
                    "inputType": "date",
                    "maxValueExpression": "today()",
                },
                {
                    type: "text",
                    name: "page3_otherPassports_passportNumber",
                    title: "Passport number",
                    isRequired: true,
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    requiredErrorText: "'Passport number' is a required field.",
                }, {
                    type: "text",
                    name: "page3_otherPassports_dateOfIssue",
                    title: "Date of issue",
                    isRequired: true,
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    requiredErrorText: "'Date of issue' is a required field.",
                    "inputType": "date",
                    "isRequired": true,
                    "maxValueExpression": "today()",
                }, {
                    type: "text",
                    name: "page3_otherPassports_dateOfExpiry",
                    title: "Date of expiry",
                    visibleIf: "{page3_otherPassports_travel_with_United_Nations_Laissez_Passer} = yes",

                    isRequired: true,
                    requiredErrorText: "'Date of expiry' is a required field.",
                    "inputType": "date",
                    "isRequired": true,
                    "minValueExpression": "today()",
                },
                {
                    'type': "radiogroup",
                    "name": "page3_otherIdentityDocuments",
                    "title": "Does this applicant have other identity documents?",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Does this applicant have other identity documents?' is a required field.",
                },
                {
                    "type": "paneldynamic",
                    "name": "page3_otherIdentityDocuments_details",
                    "title": "Add details",
                    "visibleIf": "{page3_otherIdentityDocuments} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page3_otherIdentityDocuments_details_familyName",
                            "title": "Family name",
                            "isRequired": true,
                            "requiredErrorText": "'Family name' is a required field.",
                        }, {
                            "type": "text",
                            "name": "page3_otherIdentityDocuments_details_givenNames",
                            "title": "Given names",
                            "isRequired": true,
                            "requiredErrorText": "'Given names' is a required field.",
                        }, {
                            'type': "dropdown",
                            'choices': [{ "value": "1", "text": "Birth certificate" }, { "value": "2", "text": "Drivers licence" }, { "value": "3", "text": "Marriage certificate" }, { "value": "4", "text": "Other" }],
                            "name": "page3_otherIdentityDocuments_details_type",
                            "title": "Type of document",
                            "isRequired": true,
                            "requiredErrorText": "'Type of document' is a required field.",
                        }, {
                            "type": "text",
                            "name": "page3_otherIdentityDocuments_details_number",
                            "title": "Identification number",
                            "isRequired": true,
                            "requiredErrorText": "'Identification number' is a required field.",
                        }, {
                            type: "dropdown",
                            name: "page3_otherIdentityDocuments_details_country",
                            title: "Country of issue",
                            isRequired: true,
                            requiredErrorText: "'Country of issue' is a required field.",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            }
                        },]
                },



                {
                    'type': "radiogroup",
                    "name": "page3_healthExamination",
                    "title": "Has this applicant undertaken a health examination for an Australian visa in the last 12 months?",
                    "isRequired": true,

                    "choices": [
                        {
                            value: "yes",
                            text: 'Yes',
                        },
                        {
                            value: "no",
                            text: 'No'
                        }],
                    "requiredErrorText": "'Has this applicant undertaken a health examination for an Australian visa in the last 12 months?' is a required field.",
                },
                {
                    "type": "comment",
                    "name": "page3_healthExamination_details",
                    "title": "Give details",
                    "visibleIf": "{page3_healthExamination} = yes",
                    "isRequired": true,
                    "requiredErrorText": "'Details' is a required field.",
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    "type": "comment",
                    "name": "page3_healthExamination_details_hapId",
                    "title": "HAP ID (If available)",
                    "visibleIf": "{page3_healthExamination} = yes",
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },




            ],

        },
        {
            name: "page4",
            title: "Critical data confirmation",

            elements: [{


                name: "page4_confirm",
                title: "Is the above information correct?",
                isRequired: true,
                requiredErrorText: "Press the 'Previous' button to return to the previous page and correct the details.",
                type: "boolean",
                renderAs: "checkbox",

            }]

        },
        {
            name: "page5",
            title: "Additional identity questions",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page5_previouslyTravelledToAustralia",
                title: "Has this applicant previously travelled to Australia or previously applied for a visa?",
                isRequired: true,
                requiredErrorText: "'Has this applicant previously travelled to Australia or previously applied for a visa?' is a required field.",
                type: "radiogroup",

            }]

        },
        {
            name: "page6",
            title: "Accompanying members of the family unit",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page6_hasAccompanyingMembers",
                title: "Are there any accompanying members of the family unit included in this application?",
                isRequired: true,
                requiredErrorText: "'Are there any accompanying members of the family unit included in this application?' is a required field.",
                type: "radiogroup",
            },
            {
                "type": "paneldynamic",
                "name": "page6_accompanyingMembersOfFamilyUnit",
                "title": "Add details",
                "visibleIf": "{page6_hasAccompanyingMembers} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        "type": "dropdown",
                        "name": "page6_accompanyingMembersOfFamilyUnit_relationship",
                        "title": "Relationship to the primary applicant",
                        "isRequired": true,
                        "requiredErrorText": "'Relationship to the primary applicant' is a required field.",
                        choices: [
                            { value: "child", text: "Child" },
                            { value: "spouse", text: "Spouse/De Facto Partner" },
                            { value: "stepChild", text: "Step Child" },
                        ]
                    }, {
                        choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                        name: "page6_accompanyingMembersOfFamilyUnit_isOver5",
                        title: "Is the family member over 5 years of age?",
                        isRequired: true,
                        requiredErrorText: "'Is the family member over 5 years of age?' is a required field.",
                        type: "radiogroup",
                    }, {
                        choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                        name: "page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport",
                        title: "Does the family member have a current passport?",
                        isRequired: true,
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = no",
                        requiredErrorText: "'Does the family member have a current passport?' is a required field.",
                        type: "radiogroup",
                    },
                    {
                        "type": "text",
                        "name": "page6_accompanyingMembersOfFamilyUnit_familyName",
                        "title": "Family name",
                        "isRequired": true,
                        "requiredErrorText": "'Family name' is a required field.",
                    },
                    {
                        "type": "text",
                        "name": "page6_accompanyingMembersOfFamilyUnit_givenNames",
                        "title": "Given names",
                        "isRequired": true,
                        "requiredErrorText": "'Given names' is a required field.",
                    }, {
                        type: "radiogroup",
                        name: "page6_accompanyingMembersOfFamilyUnit_sex",
                        title: "Sex",
                        isRequired: true,
                        requiredErrorText: "'Sex' is a required field.",
                        choices: ["Male", "Female", "Other"]
                    }
                    , {
                        type: "text",
                        name: "page6_accompanyingMembersOfFamilyUnit_dateOfBirth",
                        title: "Date of birth",
                        isRequired: true,
                        requiredErrorText: "'Date of birth' is a required field.",
                        "inputType": "date",
                        "maxValueExpression": "today()",
                    },
                    {
                        type: "text",
                        name: "page6_accompanyingMembersOfFamilyUnit_passportNumber",
                        title: "Passport number",
                        isRequired: true,
                        requiredErrorText: "'Passport number' is a required field.",
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes",
                    },
                    {
                        type: "dropdown",
                        name: "page6_accompanyingMembersOfFamilyUnit_countryOfPassport",
                        title: "Country of passport",
                        isRequired: true,
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes",
                        requiredErrorText: "'Country of passport' is a required field.",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        }
                    },
                    {
                        type: "dropdown",
                        name: "page6_accompanyingMembersOfFamilyUnit_nationalityOfPassportHolder",
                        title: "Nationality of passport holder",
                        isRequired: true,
                        requiredErrorText: "'Nationality of passport holder' is a required field.",
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        }
                    }, {
                        type: "text",
                        name: "page6_accompanyingMembersOfFamilyUnit_currentPassport_dateOfIssue",
                        title: "Date of issue",
                        isRequired: true,
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes", requiredErrorText: "'Date of issue' is a required field.",
                        "inputType": "date",
                        "isRequired": true,
                        "maxValueExpression": "today()",
                    }, {
                        type: "text",
                        name: "page6_accompanyingMembersOfFamilyUnit_currentPassport_dateOfExpiry",
                        title: "Date of expiry",
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes", isRequired: true,
                        requiredErrorText: "'Date of expiry' is a required field.",
                        "inputType": "date",
                        "isRequired": true,
                        "minValueExpression": "today()",
                    },
                    {
                        type: "text",
                        name: "page6_accompanyingMembersOfFamilyUnit_currentPassport_placeOfIssue",
                        title: "Place of issue / issuing authority",
                        visibleIf: "{panel.page6_accompanyingMembersOfFamilyUnit_hasCurrentPassport} = yes or {panel.page6_accompanyingMembersOfFamilyUnit_isOver5} = yes", isRequired: true,
                        requiredErrorText: "'Place of issue' is a required field.",

                    },
                    {
                        type: "radiogroup",
                        name: "page6_nationalIdentityCard",
                        title: "Does this family member have a national identity card?",
                        isRequired: true,
                        requiredErrorText: "'Does this family member have a national identity card?' is a required field.",
                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }]
                        ,
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page6_nationalIdentityCard_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page6_nationalIdentityCard} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page6_nationalIdentityCard_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page6_nationalIdentityCard_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page6_nationalIdentityCard_details_identificationNumber",
                                "title": "Identification number",
                                "isRequired": true,
                                "requiredErrorText": "'Identification number' is a required field.",
                            },
                            {
                                'type': "dropdown",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                },
                                "name": "page6_nationalIdentityCard_details_countryOfBirth",
                                "title": "Country of issue",
                                "isRequired": true,
                                "requiredErrorText": "'Country of issue' is a required field.",


                            }, {
                                "type": "text",
                                "name": "page6_nationalIdentityCard_details_dateOfIssue",
                                "title": "Date of issue",
                                "isRequired": true,
                                "requiredErrorText": "'Date of issue' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "maxValueExpression": "today()",
                            }, {

                                "type": "text",
                                "name": "page6_nationalIdentityCard_details_dateOfExpiry",
                                "title": "Date of expiry",
                                "isRequired": true,
                                "requiredErrorText": "'Date of expiry' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "minValueExpression": "today()",
                            },


                        ]
                    },
                    {
                        "type": "text",
                        "name": "page6_placeOfBirth_townCity",
                        "title": "Town / City",
                        "isRequired": true,
                        "requiredErrorText": "'Town / City' is a required field.",
                    },
                    {
                        "type": "text",
                        "name": "page6_placeOfBirth_stateProvince",
                        "title": "State / Province",
                        "isRequired": true,
                        "requiredErrorText": "'Identification number' is a required field.",
                    },
                    {
                        'type': "dropdown",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        },
                        "name": "page6_placeOfBirth_countryOfBirth",
                        "title": "Country of birth",
                        "isRequired": true,
                        "requiredErrorText": "'Country of birth' is a required field.",
                    },

                    {
                        "type": "dropdown",
                        name: "page6_relationshipStatus",
                        title: "Relationship status",
                        isRequired: true,
                        requiredErrorText: "'Relationship status' is a required field.",
                        choices: [
                            { "value": "1", "text": "De Facto" },
                            { "value": "2", "text": "Divorced" },
                            { "value": "3", "text": "Engaged" },
                            { "value": "4", "text": "Married" },
                            { "value": "5", "text": "Never Married" },
                            { "value": "6", "text": "Separated" },
                            { "value": "7", "text": "Widowed" }
                        ]
                    }, {
                        type: "radiogroup",
                        name: "page6_otherNames",
                        title: "Is this family member currently, or have they ever been known by any other names?",
                        isRequired: true,
                        requiredErrorText: "'Is this family member currently, or have they ever been known by any other names?' is a required field.",
                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }]
                        ,
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page6_otherNames_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page6_otherNames} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page6_otherNames_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page6_otherNames_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            },

                            {
                                'type': "dropdown",
                                'choices': [{ "value": "1", "text": "Deed Poll" }, { "value": "2", "text": "Marriage" }, { "value": "3", "text": "Other" }],
                                "name": "page6_otherNames_details_reasonForNameChange",
                                "title": "Reason for name change",
                                "isRequired": true,
                                "requiredErrorText": "'Reason for name change' is a required field.",
                            }]
                    },
                    {
                        "type": "radiogroup",
                        "name": "page6_citizenOfPassport",
                        "title": "Is this family member a citizen of the selected country of passport?",
                        isRequired: true,
                        requiredErrorText: "'Is this family member a citizen of the selected country of passport?' is a required field.",

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_citizenOfOtherCountry",
                        "title": "Is this family member a citizen of any other country?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this applicant a citizen of any other country?' is a required field.",
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page6_citizenOfOtherCountry_countries",
                        "title": "Add country",
                        "visibleIf": "{panel.page6_citizenOfOtherCountry} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                'type': "dropdown",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                },
                                "name": "page6_citizenOfOtherCountry_country",
                                "title": "List countries",
                                "isRequired": true,
                                "requiredErrorText": "'List countries' is a required field.",
                            }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_citizenship_stateless",
                        "title": "Is this applicant currently stateless?",
                        "visibleIf": " {panel.page6_citizenOfOtherCountry} = no and {panel.page6_citizenOfPassport} = no",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this applicant currently stateless?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "panel.page6_citizenship_stateless_details",
                        "title": "The responses to the questions above indicate that this applicant holds no citizenship and is not stateless. If this is not correct, then amend the answers above. If this is correct, give details as to why the applicant is not a citizen of any country and is not stateless.",
                        "visibleIf": "{panel.page6_citizenship_stateless} = no",
                        "isRequired": true,
                        "requiredErrorText": "'details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_otherIdentityDocuments",
                        "title": "Does this family member have other identity documents?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Does this family member have other identity documents?' is a required field.",
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page6_otherIdentityDocuments_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page6_otherIdentityDocuments} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page6_otherIdentityDocuments_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            }, {
                                "type": "text",
                                "name": "page6_otherIdentityDocuments_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            }, {
                                'type': "dropdown",
                                'choices': [{ "value": "1", "text": "Birth certificate" }, { "value": "2", "text": "Drivers licence" }, { "value": "3", "text": "Marriage certificate" }, { "value": "4", "text": "Other" }],
                                "name": "page6_otherIdentityDocuments_details_type",
                                "title": "Type of document",
                                "isRequired": true,
                                "requiredErrorText": "'Type of document' is a required field.",
                            }, {
                                "type": "text",
                                "name": "page6_otherIdentityDocuments_details_number",
                                "title": "Identification number",
                                "isRequired": true,
                                "requiredErrorText": "'Identification number' is a required field.",
                            }, {
                                type: "dropdown",
                                name: "page6_otherIdentityDocuments_details_country",
                                title: "Country of issue",
                                isRequired: true,
                                requiredErrorText: "'Country of issue' is a required field.",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                }
                            },]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_grantNumber",
                        "title": "Does this applicant have an Australian visa grant number?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Does this applicant have an Australian visa grant number?' is a required field.",
                    },
                    {
                        "type": "text",
                        "name": "panel.page6_citizenship_stateless_details_grantNumber",
                        "title": "Australian visa grant number (if known)",
                        "visibleIf": "{panel.page6_grantNumber} = yes",
                        "requiredErrorText": "'Australian visa grant number' is a required field.",
                    },


                    {
                        'type': "radiogroup",
                        "name": "page6_healthExamination",
                        "title": "Has this applicant undertaken a health examination for an Australian visa in the last 12 months?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Has this applicant undertaken a health examination for an Australian visa in the last 12 months?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "page6_healthExamination_details",
                        "title": "Give details",
                        "visibleIf": "{panel.page6_healthExamination} = yes",
                        "isRequired": true,
                        "requiredErrorText": "'Details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },
                    {
                        "type": "comment",
                        "name": "page6_healthExamination_details_hapId",
                        "title": "HAP ID (If available)",
                        "visibleIf": "{panel.page6_healthExamination} = yes",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_childUnder18",
                        "title": "Is this family member a child under 18 years of age?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this family member a child under 18 years of age?' is a required field.",
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_childUnder18_primaryApplicantCare",
                        "title": "Is this child in the primary applicant's care and legal custody?",
                        "visibleIf": "{panel.page6_childUnder18} = yes",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this child in the primary applicant's care and legal custody?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "page6_childUnder18_primaryApplicantCare_details",
                        "title": "Give details",
                        "visibleIf": "{panel.page6_childUnder18_primaryApplicantCare} = no",
                        "isRequired": true,
                        "requiredErrorText": "'Details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_childUnder18_otherPersonHasRights",
                        "title": "Does any other person have custodial, access or guardianship rights to this child?",
                        "visibleIf": "{panel.page6_childUnder18} = yes",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Does any other person have custodial, access or guardianship rights to this child?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "page6_childUnder18_otherPersonHasRights_details",
                        "title": "Give details",
                        "visibleIf": "{panel.page6_childUnder18_otherPersonHasRights} = yes",
                        "isRequired": true,
                        "requiredErrorText": "'Details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page6_childUnder18_legalImpediments",
                        "title": "Are there any legal impediments to this child's travel?",
                        "visibleIf": "{panel.page6_childUnder18} = yes",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Are there any legal impediments to this child's travel?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "page6_childUnder18_legalImpediments_details",
                        "title": "Give details",
                        "visibleIf": "{panel.page6_childUnder18_legalImpediments} = yes",
                        "isRequired": true,
                        "requiredErrorText": "'Details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },





                ]
            }]

        },
        {
            name: "page7",
            title: "Accompanying members of the family unit",
            visibleIf: "{page6_hasAccompanyingMembers} = yes",

            elements: [{


                name: "page7_confirm",
                title: "Is the above information correct?",
                isRequired: true,
                requiredErrorText: "Press the 'Previous' button to return to the previous page and correct the details.",
                type: "boolean",
                renderAs: "checkbox",

            }]
        },

        {
            name: "page8",
            title: "Contact details",

            elements: [{


                name: "page8_contactDetails_residenceCountry",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                },

                title: "Usual country of residence",
                isRequired: true,
                requiredErrorText: "'Usual country of residence' is a required field.",
                type: "dropdown",

            }, {


                name: "page8_contactDetails_departmentOffice",
                choices: [
                    { value: 1, text: "Australia, ACT Regional Office" },
                    { value: 2, text: "Australia, Adelaide Regional Office" },
                    { value: 3, text: "Australia, Brisbane Regional Office" },
                    { value: 4, text: "Australia, Cairns Regional Office" },
                    { value: 5, text: "Australia, Dandenong Regional Office" },
                    { value: 6, text: "Australia, Darwin Regional Office" },
                    { value: 7, text: "Australia, Hobart Regional Office" },
                    { value: 8, text: "Australia, Melbourne Regional Office" },
                    { value: 9, text: "Australia, Parramatta Regional Office" },
                    { value: 10, text: "Australia, Perth Regional Office" },
                    { value: 11, text: "Australia, Sydney City Office" },
                    { value: 12, text: "Australia, Thursday Island Office" },
                    { value: 13, text: "Brazil, Brasilia" },
                    { value: 14, text: "Cambodia, Phnom Penh" },
                    { value: 15, text: "Canada, Ottawa" },
                    { value: 16, text: "Chile, Santiago de Chile" },
                    { value: 17, text: "China, Beijing" },
                    { value: 18, text: "China, Guangzhou" },
                    { value: 19, text: "China, Hong Kong" },
                    { value: 20, text: "China, Shanghai" },
                    { value: 21, text: "Egypt, Cairo" },
                    { value: 22, text: "Fiji, Suva" },
                    { value: 23, text: "Germany, Berlin" },
                    { value: 24, text: "India, New Delhi" },
                    { value: 25, text: "Indonesia, Jakarta" },
                    { value: 26, text: "Iran, Tehran" },
                    { value: 27, text: "Israel, Tel Aviv" },
                    { value: 28, text: "Jordan, Amman" },
                    { value: 29, text: "Kenya, Nairobi" },
                    { value: 30, text: "Malaysia, Kuala Lumpur" },
                    { value: 31, text: "Myanmar, Yangon" },
                    { value: 32, text: "New Zealand, Wellington" },
                    { value: 33, text: "Pakistan, Islamabad" },
                    { value: 34, text: "Papua New Guinea, Port Moresby" },
                    { value: 35, text: "Philippines, Manila" },
                    { value: 36, text: "Republic of Turkiye, Ankara" },
                    { value: 37, text: "Serbia, Belgrade" },
                    { value: 38, text: "Singapore" },
                    { value: 39, text: "South Africa, Pretoria" },
                    { value: 40, text: "South Korea, Seoul" },
                    { value: 41, text: "Sri Lanka, Colombo" },
                    { value: 42, text: "Thailand, Bangkok" },
                    { value: 43, text: "Timor-Leste, Dili" },
                    { value: 44, text: "United Arab Emirates, Dubai" },
                    { value: 45, text: "United Kingdom, London" },
                    { value: 46, text: "United States, Washington" },
                    { value: 47, text: "Vietnam, Hanoi" },
                    { value: 48, text: "Vietnam, Ho Chi Minh City" }
                ],
                title: "Office",
                isRequired: true,
                requiredErrorText: "'Office' is a required field.",
                type: "dropdown",

            }, {
                name: "page8_contactDetails_country",
                title: "Country",
                isRequired: true,
                requiredErrorText: "'Country' is a required field.",
                type: "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }

            }, {

                name: "page8_contactDetails_address",
                title: "Address",
                isRequired: true,
                requiredErrorText: "'Address' is a required field.",
                type: "text",

            },
            {

                name: "page8_contactDetails_suburb",
                title: "Suburb / Town",
                type: "text",

            },
            {
                name: "page8_contactDetails_state",
                title: "State or Province",
                requiredErrorText: "'State or Province' is a required field.",
                type: "dropdown",
            },
            {
                name: "page8_contactDetails_postalCode",
                title: "Postal code",
                type: "text",
            },
            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page8_postalAddress_sameAsResidential",
                title: "Is the postal address the same as the residential address?",
                isRequired: true,
                requiredErrorText: "'Is the postal address the same as the residential address' is a required field.",
                type: "radiogroup",
            },
            {
                name: "page8_contactDetails_country_notSameAsResidential",
                title: "Country",
                visibleIf: "{page8_postalAddress_notSameAsResidential} = no",
                isRequired: true,
                requiredErrorText: "'Country' is a required field.",
                type: "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }

            }, {

                name: "page8_contactDetails_notSameAsResidential_address",
                visibleIf: "{page8_postalAddress_sameAsResidential} = no",

                title: "Address",
                isRequired: true,
                requiredErrorText: "'Address' is a required field.",
                type: "text",

            },
            {

                name: "page8_contactDetails_notSameAsResidential_suburb",
                visibleIf: "{page8_postalAddress_sameAsResidential} = no",

                title: "Suburb / Town",
                type: "text",

            },
            {
                name: "page8_contactDetails_notSameAsResidential_state",
                visibleIf: "{page8_postalAddress_sameAsResidential} = no",

                title: "State or Province",
                type: "dropdown",
            },
            {
                name: "page8_contactDetails_notSameAsResidential_postalCode",
                visibleIf: "{page8_postalAddress_sameAsResidential} = no",

                title: "Postal code",
                type: "text",
            },
            {
                name: "page8_contactTelephoneNumbers_homePhone",
                title: "Home phone",
                type: "text",
            },
            {
                name: "page8_contactTelephoneNumbers_businessPhone",
                title: "Business phone",
                type: "text",
            },
            {
                name: "page8_contactTelephoneNumbers_mobilePhone",
                title: "Mobile / Cell phone",
                type: "text",
            },
            {
                name: "page8_emailAddress",
                title: "Email address",
                type: "text",
            },



            ]

        },

        {
            name: "page9",
            title: "Authorised recipient",

            elements: [{

                choices: [{ value: 1, text: "No" }, { value: 2, text: "Yes, a registered migration agent" }, {
                    value: 3, text: "Yes, a legal practitioner"
                }, {
                    value: 4, text: "Yes, an education agent"
                }, {
                    value: 5, text: "Yes, another person"
                }
                ],
                name: "page9_authorisedRecipient",
                title: "Does the applicant authorise another person to receive written correspondence on their behalf?",
                isRequired: true,
                requiredErrorText: "'Does the applicant authorise another person to receive written correspondence on their behalf' is a required field.",
                type: "radiogroup",

            },

            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page9_authorisedRecipient_isAuthorised",
                title: "Has the applicant appointed this person to provide them immigration assistance?",
                isRequired: true,
                visibleIf: "{page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 2 ",
                requiredErrorText: "'Has the applicant appointed this person to provide them immunity assistance' is a required field.",
                type: "radiogroup",
            },

            {

                name: "page9_authorisedRecipient_marn",
                title: "MARN",
                isRequired: true,
                requiredErrorText: "'MARN' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2",

            },
            {

                name: "page9_authorisedRecipient_lpn",
                title: "Legal practitioner number (LPN)",
                isRequired: true,
                requiredErrorText: "'LPN' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 3",

            },

            {

                name: "page9_authorisedRecipient_familyName",
                title: "Family name",
                isRequired: true,
                requiredErrorText: "'Family name' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",

            },

            {

                name: "page9_authorisedRecipient_givenNames",
                title: "Given names",
                isRequired: true,
                requiredErrorText: "'Given names' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",

            },
            {

                name: "page9_authorisedRecipient_organisation",
                title: "Organisation",
                isRequired: true,
                requiredErrorText: "'Organisation' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 ",

            },

            {
                name: "page9_postalAddress_country",
                title: "Country",
                isRequired: true,
                requiredErrorText: "'Country' is a required field.",
                type: "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                },
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",

            }, {

                name: "page9_contactDetails_address",
                title: "Address",
                isRequired: true,
                requiredErrorText: "'Address' is a required field.",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",

            },
            {

                name: "page9_postalAddress_suburb",
                title: "Suburb / Town",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",

            },
            {
                name: "page9_postalAddress_state",
                title: "State or Province",
                requiredErrorText: "'State or Province' is a required field.",
                type: "dropdown",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",
            },
            {
                name: "page9_postalAddress_postalCode",
                title: "Postal code",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",
            },

            {
                name: "page9_contactTelephoneNumbers_businessPhone",
                title: "Business phone",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",
            },
            {
                name: "page9_contactTelephoneNumbers_mobilePhone",
                title: "Mobile / Cell phone",
                type: "text",
                visibleIf: "{page9_authorisedRecipient} = 2 or {page9_authorisedRecipient} = 3 or {page9_authorisedRecipient} = 4 or {page9_authorisedRecipient} = 5",
            },

            {
                name: "page9_emailAddress",
                title: "Email address",
                isRequired: true,
                requiredErrorText: "'Email address' is a required field.",
                type: "text",
            },

            ]

        },

        {
            name: "page10",
            title: "Non-accompanying members of the family unit",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page10_relationshipToPrimaryApplicant",
                title: "Does the applicant have any members of their family unit that have not already been included as an 'Accompanying member of the family unit' in this application?",
                isRequired: true,
                requiredErrorText: "'Does the applicant have any members of their family unit that have not already been included as an 'Accompanying member of the family unit' in this application?' is a required field.",
                type: "radiogroup",
            }, {
                "type": "paneldynamic",
                "name": "page10_relationshipToPrimaryApplicant_details",
                "title": "Add details",
                "visibleIf": "{page10_relationshipToPrimaryApplicant} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        "type": "dropdown",
                        "name": "page10_relationshipToPrimaryApplicant_details_relationship",
                        "title": "Relationship to the primary applicant",
                        "isRequired": true,
                        "requiredErrorText": "'Relationship to the primary applicant' is a required field.",
                        choices: [
                            { value: "child", text: "Child" },
                            { value: "spouse", text: "Spouse/De Facto Partner" },
                            { value: "stepChild", text: "Step Child" },
                        ]
                    },
                    {
                        name: "page10_familyMemberDetails_currentPassport",
                        title: "Does the family member have a current passport?",
                        isRequired: true,
                        requiredErrorText: "'Does the family member have a current passport?' is a required field.",
                        type: "radiogroup",
                        choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],

                    },

                    {
                        "type": "text",
                        "name": "page10_familyMemberDetails_familyName",
                        "title": "Family name",
                        "isRequired": true,
                        "requiredErrorText": "'Family name' is a required field.",
                    },
                    {
                        "type": "text",
                        "name": "page10_familyMemberDetails_givenNames",
                        "title": "Given names",
                        "isRequired": true,
                        "requiredErrorText": "'Given names' is a required field.",
                    }, {
                        type: "radiogroup",
                        name: "page10_familyMemberDetails_sex",
                        title: "Sex",
                        isRequired: true,
                        requiredErrorText: "'Sex' is a required field.",
                        choices: ["Male", "Female", "Other"]
                    }
                    , {
                        type: "text",
                        name: "page10_familyMemberDetails_dateOfBirth",
                        title: "Date of birth",
                        isRequired: true,
                        requiredErrorText: "'Date of birth' is a required field.",
                        "inputType": "date",
                        "maxValueExpression": "today()",
                    },
                    {
                        type: "text",
                        name: "page10_familyMemberDetails_currentPassport_number",
                        title: "Passport number",
                        isRequired: true,
                        requiredErrorText: "'Passport number' is a required field.",
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes"
                    },
                    {
                        type: "dropdown",
                        name: "page10_familyMemberDetails_currentPassport_country",
                        title: "Country of passport",
                        isRequired: true,
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes",
                        requiredErrorText: "'Country of passport' is a required field.",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        }
                    },
                    {
                        type: "dropdown",
                        name: "page10_familyMemberDetails_currentPassport_nationality",
                        title: "Nationality of passport holder",
                        isRequired: true,
                        requiredErrorText: "'Nationality of passport holder' is a required field.",
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        }
                    }, {
                        type: "text",
                        name: "page10_familyMemberDetails_currentPassport_dateOfIssue",
                        title: "Date of issue",
                        isRequired: true,
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes",
                        requiredErrorText: "'Date of issue' is a required field.",
                        "inputType": "date",
                        "isRequired": true,
                        "maxValueExpression": "today()",
                    }, {
                        type: "text",
                        name: "page10_familyMemberDetails_currentPassport_dateOfExpiry",
                        title: "Date of expiry",
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes",
                        isRequired: true,
                        requiredErrorText: "'Date of expiry' is a required field.",
                        "inputType": "date",
                        "isRequired": true,
                        "minValueExpression": "today()",
                    },
                    {
                        type: "text",
                        name: "page10_familyMemberDetails_currentPassport_placeOfIssue",
                        title: "Place of issue / issuing authority",
                        visibleIf: "{panel.page10_familyMemberDetails_currentPassport} = yes",
                        isRequired: true,
                        requiredErrorText: "'Place of issue' is a required field.",

                    },
                    {
                        type: "radiogroup",
                        name: "page10_nationalIdentityCard",
                        title: "Does this family member have a national identity card?",
                        isRequired: true,
                        requiredErrorText: "'Does this family member have a national identity card?' is a required field.",
                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }]
                        ,
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page10_nationalIdentityCard_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page10_nationalIdentityCard} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page10_nationalIdentityCard_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page10_nationalIdentityCard_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page10_nationalIdentityCard_details_identificationNumber",
                                "title": "Identification number",
                                "isRequired": true,
                                "requiredErrorText": "'Identification number' is a required field.",
                            },
                            {
                                'type': "dropdown",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                },
                                "name": "page10_nationalIdentityCard_details_countryOfBirth",
                                "title": "Country of issue",
                                "isRequired": true,
                                "requiredErrorText": "'Country of issue' is a required field.",


                            }, {
                                "type": "text",
                                "name": "page10_nationalIdentityCard_details_dateOfIssue",
                                "title": "Date of issue",
                                "isRequired": true,
                                "requiredErrorText": "'Date of issue' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "maxValueExpression": "today()",
                            }, {

                                "type": "text",
                                "name": "page10_nationalIdentityCard_details_dateOfExpiry",
                                "title": "Date of expiry",
                                "isRequired": true,
                                "requiredErrorText": "'Date of expiry' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "minValueExpression": "today()",
                            }]
                    },
                    {
                        "type": "text",
                        "name": "page10_placeOfBirth_townCity",
                        "title": "Town / City",
                        "isRequired": true,
                        "requiredErrorText": "'Town / City' is a required field.",
                    },
                    {
                        "type": "text",
                        "name": "page10_placeOfBirth_stateProvince",
                        "title": "State / Province",
                        "isRequired": true,
                        "requiredErrorText": "'Identification number' is a required field.",
                    },
                    {
                        'type': "dropdown",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        },
                        "name": "page10_placeOfBirth_countryOfBirth",
                        "title": "Country of birth",
                        "isRequired": true,
                        "requiredErrorText": "'Country of birth' is a required field.",
                    },

                    {
                        "type": "dropdown",
                        name: "page10_relationshipStatus",
                        title: "Relationship status",
                        isRequired: true,
                        requiredErrorText: "'Relationship status' is a required field.",
                        choices: [
                            { "value": "1", "text": "De Facto" },
                            { "value": "2", "text": "Divorced" },
                            { "value": "3", "text": "Engaged" },
                            { "value": "4", "text": "Married" },
                            { "value": "5", "text": "Never Married" },
                            { "value": "6", "text": "Separated" },
                            { "value": "7", "text": "Widowed" }
                        ]
                    }, {
                        type: "radiogroup",
                        name: "page10_otherNames",
                        title: "Is this family member currently, or have they ever been known by any other names?",
                        isRequired: true,
                        requiredErrorText: "'Is this family member currently, or have they ever been known by any other names?' is a required field.",
                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }]
                        ,
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page10_otherNames_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page10_otherNames} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page10_otherNames_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            },
                            {
                                "type": "text",
                                "name": "page10_otherNames_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            },

                            {
                                'type': "dropdown",
                                'choices': [{ "value": "1", "text": "Deed Poll" }, { "value": "2", "text": "Marriage" }, { "value": "3", "text": "Other" }],
                                "name": "page10_otherNames_details_reasonForNameChange",
                                "title": "Reason for name change",
                                "isRequired": true,
                                "requiredErrorText": "'Reason for name change' is a required field.",
                            }]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page10_citizenOfOtherCountry",
                        "title": "Is this family member a citizen of any country?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this family member a citizen of any country?' is a required field.",
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page10_citizenOfOtherCountry_countries",
                        "title": "Add country",
                        "visibleIf": "{panel.page10_citizenOfOtherCountry} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                'type': "dropdown",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                },
                                "name": "page10_citizenOfOtherCountry_country",
                                "title": "List countries",
                                "isRequired": true,
                                "requiredErrorText": "'List countries' is a required field.",
                            }]
                    }

                    , {
                        'type': "radiogroup",
                        "name": "page10_citizenship_stateless",
                        "title": "Is this family member currently stateless?",
                        "visibleIf": " {panel.page10_citizenOfOtherCountry} = no",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Is this family member currently stateless?' is a required field.",
                    },
                    {
                        "type": "comment",
                        "name": "page10_citizenship_stateless_details",
                        "title": "The responses to the questions above indicate that this applicant holds no citizenship and is not stateless. If this is not correct, then amend the answers above. If this is correct, give details as to why the applicant is not a citizen of any country and is not stateless.",
                        "visibleIf": "{panel.page10_citizenship_stateless} = no",
                        "isRequired": true,
                        "requiredErrorText": "'details' is a required field.",
                        validators: [{
                            type: "text",
                            maxLength: 300,
                        }]
                    },


                    {
                        'type': "radiogroup",
                        "name": "page10_otherPassports",
                        "title": "Does this family member have other current passports?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Does this family member have other current passports?' is a required field.",
                    },

                    {
                        'type': "paneldynamic",
                        "name": "page10_otherPassports_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page10_otherPassports} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                type: "text",
                                name: "page10_passportDetails_firstName",
                                title: "Family name",
                                isRequired: true,
                                requiredErrorText: "'Family name' is a required field."
                            },
                            {
                                type: "text",
                                name: "page10_passportDetails_givenNames",
                                title: "Given names",
                                isRequired: true,
                                requiredErrorText: "'Given names' is a required field."
                            },
                            {
                                type: "radiogroup",
                                name: "page10_passportDetails_sex",
                                title: "Sex",
                                isRequired: true,
                                requiredErrorText: "'Sex' is a required field.",
                                choices: ["Male", "Female", "Other"]
                            },
                            {
                                type: "text",
                                name: "page10_passportDetails_dateOfBirth",
                                title: "Date of birth",
                                isRequired: true,
                                requiredErrorText: "'Date of birth' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "maxValueExpression": "today()",
                            },
                            {
                                type: "text",
                                name: "page10_passportDetails_passportNumber",
                                title: "Passport number",
                                isRequired: true,
                                requiredErrorText: "'Passport number' is a required field."
                            },
                            {
                                type: "dropdown",
                                name: "page10_passportDetails_countryOfPassport",
                                title: "Country of passport",
                                isRequired: true,
                                requiredErrorText: "'Country of passport' is a required field.",


                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                }
                            },
                            {
                                type: "dropdown",
                                name: "page10_passportDetails_nationalityOfPassport",
                                title: "Nationality of passport holder",
                                isRequired: true,
                                requiredErrorText: "'Nationality of passport holder' is a required field.",


                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                }
                            }, {
                                type: "text",
                                name: "page10_passportDetails_dateOfIssue",
                                title: "Date of issue",
                                isRequired: true,
                                requiredErrorText: "'Date of issue' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "maxValueExpression": "today()",
                            }, {
                                type: "text",
                                name: "page10_passportDetails_dateOfExpiry",
                                title: "Date of expiry",
                                isRequired: true,
                                requiredErrorText: "'Date of expiry' is a required field.",
                                "inputType": "date",
                                "isRequired": true,
                                "minValueExpression": "today()",
                            }, {
                                type: "text",
                                name: "page10_passportDetails_placeOfIssue",
                                title: "Place of issue / issuing authority",
                                isRequired: true,
                                requiredErrorText: "'Place of issue / issuing authority' is a required field.",
                            },
                        ]
                    },
                    {
                        'type': "radiogroup",
                        "name": "page10_otherIdentityDocuments",
                        "title": "Does this family member have other identity documents?",
                        "isRequired": true,

                        "choices": [
                            {
                                value: "yes",
                                text: 'Yes',
                            },
                            {
                                value: "no",
                                text: 'No'
                            }],
                        "requiredErrorText": "'Does this family member have other identity documents?' is a required field.",
                    },
                    {
                        "type": "paneldynamic",
                        "name": "page10_otherIdentityDocuments_details",
                        "title": "Add details",
                        "visibleIf": "{panel.page10_otherIdentityDocuments} = yes",
                        "confirmDelete": true,
                        "panelCount": 1,
                        "templateElements": [
                            {
                                "type": "text",
                                "name": "page10_otherIdentityDocuments_details_familyName",
                                "title": "Family name",
                                "isRequired": true,
                                "requiredErrorText": "'Family name' is a required field.",
                            }, {
                                "type": "text",
                                "name": "page10_otherIdentityDocuments_details_givenNames",
                                "title": "Given names",
                                "isRequired": true,
                                "requiredErrorText": "'Given names' is a required field.",
                            }, {
                                'type': "dropdown",
                                'choices': [{ "value": "1", "text": "Birth certificate" }, { "value": "2", "text": "Drivers licence" }, { "value": "3", "text": "Marriage certificate" }, { "value": "4", "text": "Other" }],
                                "name": "page10_otherIdentityDocuments_details_type",
                                "title": "Type of document",
                                "isRequired": true,
                                "requiredErrorText": "'Type of document' is a required field.",
                            }, {
                                "type": "text",
                                "name": "page10_otherIdentityDocuments_details_number",
                                "title": "Identification number",
                                "isRequired": true,
                                "requiredErrorText": "'Identification number' is a required field.",
                            }, {
                                type: "dropdown",
                                name: "page10_otherIdentityDocuments_details_country",
                                title: "Country of issue",
                                isRequired: true,
                                requiredErrorText: "'Country of issue' is a required field.",
                                "choicesByUrl": {
                                    "url": "https://surveyjs.io/api/CountriesExample",
                                    "valueName": "name"
                                }
                            },]
                    },
                ]
            }]

        },
        {
            name: "page11",
            title: "Other family members",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page11_hasAnyParentOrSiblingInOrOutsideAustralia",
                title: "Does the applicant have any parents or siblings in or outside Australia?",
                isRequired: true,
                type: "radiogroup",

            }, {
                "type": "paneldynamic",
                "name": "page11_hasAnyParentOrSiblingInOrOutsideAustralia_details",
                "title": "Add details",
                "visibleIf": "{page11_hasAnyParentOrSiblingInOrOutsideAustralia} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        choices: [{ value: 1, text: "Brother" }, { value: 2, text: "Mother/Father-in-law" }, { value: 3, text: "Parent" }, { value: 4, text: "Sister" }, { value: 5, text: "Sister/Brother-in-law" }, { value: 6, text: "Step Parent" }, { value: 7, text: "Step-brother" }, { value: 8, text: "Step-sister" }],
                        name: "page11_hasAnyParentOrSiblingInOrOutsideAustralia_relationship",
                        title: "Relationship to the primary applicant",
                        isRequired: true,
                        type: "dropdown",


                    }, {
                        type: "text",
                        name: "page11_familyMemberDetails_firstName",
                        title: "Family name",
                        isRequired: true,
                        requiredErrorText: "'Family name' is a required field."
                    },
                    {
                        type: "text",
                        name: "page11_familyMemberDetails_givenNames",
                        title: "Given names",
                        isRequired: true,
                        requiredErrorText: "'Given names' is a required field."
                    },
                    {
                        type: "radiogroup",
                        name: "page11_familyMemberDetails_sex",
                        title: "Sex",
                        isRequired: true,
                        requiredErrorText: "'Sex' is a required field.",
                        choices: ["Male", "Female", "Other"]
                    },
                    {
                        type: "text",
                        name: "page11_familyMemberDetails_dateOfBirth",
                        title: "Date of birth",
                        isRequired: true,
                        requiredErrorText: "'Date of birth' is a required field.",
                        "inputType": "date",
                        "isRequired": true,
                        "maxValueExpression": "today()",
                    }, {


                        name: "page11_familyMemberDetails_residenceCountry",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        },

                        title: "Usual country of residence",
                        isRequired: true,
                        requiredErrorText: "'Usual country of residence' is a required field.",
                        type: "dropdown",

                    }]
            },]
        },
        {
            name: "page12",
            title: "Child custody arrangements",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page12_legalCustody",
                title: "Does the parent or person who has legal custody of the applicant have the sole legal right to determine where the applicant will live or to remove them from their usual country of residence?",
                isRequired: true,
                type: "radiogroup",
            },
            {
                type: "text",
                name: "page12_legalCustody_natureOfLegalRight",
                title: "Nature of legal right",
                "visibleIf": "{page12_legalCustody} = no",
                isRequired: true,
            },
            {
                type: "dropdown",
                choices: [
                    { "value": 1, "text": "Aunt" },
                    { "value": 2, "text": "Brother" },
                    { "value": 3, "text": "Cousin" },
                    { "value": 4, "text": "Daughter/Son-in-law" },
                    { "value": 5, "text": "Fiance/Fiancee" },
                    { "value": 6, "text": "Friend" },
                    { "value": 7, "text": "Grand Parent" },
                    { "value": 8, "text": "Mother/Father-in-law" },
                    { "value": 9, "text": "Nephew" },
                    { "value": 10, "text": "Niece" },
                    { "value": 11, "text": "Parent" },
                    { "value": 12, "text": "Sister" },
                    { "value": 13, "text": "Sister/Brother-in-law" },
                    { "value": 14, "text": "Spouse/De Facto Partner" },
                    { "value": 15, "text": "Step Parent" },
                    { "value": 16, "text": "Step-brother" },
                    { "value": 17, "text": "Step-sister" },
                    { "value": 18, "text": "Uncle" }
                ],
                name: "page12_legalCustody_relationShipToApplicant",
                title: "Relationship to the applicant",
                "visibleIf": "{page12_legalCustody} = no",

                isRequired: true,
            },
            {
                type: "text",
                name: "page12_legalCustody_firstName",
                title: "Family name",
                isRequired: true,
                "visibleIf": "{page12_legalCustody} = no",

            },
            {
                type: "text",
                name: "page12_legalCustody_givenNames",
                title: "Given names",
                isRequired: true,
                "visibleIf": "{page12_legalCustody} = no",

            }
                , {
                name: "page12_legalCustody_country",
                title: "Country",
                isRequired: true,
                requiredErrorText: "'Country' is a required field.",
                type: "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }
                , "visibleIf": "{page12_legalCustody} = no",


            }, {

                name: "page12_legalCustody_address",
                title: "Address",
                isRequired: true,
                requiredErrorText: "'Address' is a required field.",
                type: "text",
                "visibleIf": "{page12_legalCustody} = no",


            },
            {

                name: "page12_legalCustody_suburb",
                title: "Suburb / Town",
                type: "text",
                "visibleIf": "{page12_legalCustody} = no",


            },
            {
                name: "page12_legalCustody_state",
                title: "State or Province",
                requiredErrorText: "'State or Province' is a required field.",
                type: "dropdown",
                "visibleIf": "{page12_legalCustody} = no",

            },
            {
                name: "page12_legalCustody_postalCode",
                title: "Postal code",
                type: "text",
                "visibleIf": "{page12_legalCustody} = no",

            },
            {
                name: "page12_legalCustody_homePhone",
                title: "Home phone",
                type: "text",
                "visibleIf": "{page12_legalCustody} = no",

            },

            {
                name: "page12_legalCustody_mobilePhone",
                title: "Mobile / Cell phone",
                type: "text",
                "visibleIf": "{page12_legalCustody} = no",

            },

            ]
        },
        {
            name: "page13",
            title: "Accommodation and welfare arrangements",

            elements: [{

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page13_accommodationAndWelfareArrangements_stayInAustralia",
                title: "Will a parent or person who has custody of the applicant stay with them in Australia for the duration of stay or until the applicant turns 18?",
                isRequired: true,
                type: "radiogroup",
            },
            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page13_accommodationAndWelfareArrangements_parent_applyForStudentGuardianVisa",
                title: "Has the parent or person who has custody of the applicant applied for or intends to apply for a Student Guardian visa?",
                isRequired: true,
                type: "radiogroup",
                visibleIf: "{page13_accommodationAndWelfareArrangements_stayInAustralia} = yes",

            },
            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page13_accommodationAndWelfareArrangements_atleast21",
                visibleIf: "{page13_accommodationAndWelfareArrangements_stayInAustralia} = no",
                title: "Has a parent or person who has custody of the applicant made arrangements for them to stay in Australia with a relative at least 21 years or older?",
                isRequired: true,
                type: "radiogroup",
            },
            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page13_accommodationAndWelfareArrangements_confirmationLetter",
                visibleIf: "{page13_accommodationAndWelfareArrangements_atleast21} = no",
                title: "Has the applicant obtained Confirmation of Appropriate Accommodation and Welfare (CAAW) letters from their education providers?",
                isRequired: true,
                type: "radiogroup",
            },
            {

                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page13_accommodationAndWelfareArrangements_madeArrgaments",
                visibleIf: "{page13_accommodationAndWelfareArrangements_confirmationLetter} = no",
                title: "Has the Department of Foreign Affairs and Trade or the Department of Defence made arrangements for the applicant's accommodation, support and general welfare?",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                type: "radiogroup",
                name: "page13_accommodationAndWelfareArrangements_applyForStudentGuardianVisa",
                title: "Has the relative of the applicant applied for or intends to apply for a Student Guardian visa?",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes",
                isRequired: true,
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                type: "radiogroup",
                name: "page13_accommodationAndWelfareArrangements_haveDetails",
                title: "Does the applicant have details of the related Student Guardian visa application?",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_applyForStudentGuardianVisa} = yes or {page13_accommodationAndWelfareArrangements_parent_applyForStudentGuardianVisa} = yes",
                isRequired: true,
            },
            {
                type: "dropdown",
                choices: [
                    { "value": 1, "text": "Application ID" },
                    { "value": 2, "text": "Transaction reference number (TRN)" },
                    { "value": 3, "text": "Visa grant number" },
                ],
                name: "page13_accommodationAndWelfareArrangements_referenceNumberType",
                title: "Reference number type",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_haveDetails} = yes ",
                isRequired: true,
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_referenceNumberType_applicationId",
                title: "Application ID",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_referenceNumberType} = 1",
                isRequired: true,
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_referenceNumberType_TRN",
                title: "Transaction Reference Number (TRN)",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_referenceNumberType} = 2",
                isRequired: true,
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_referenceNumberType_australianVisaGrantNumber",
                title: "Australian visa grant number (if known)",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_referenceNumberType} = 3",
            },
            {
                type: "dropdown",
                choices: [
                    { "value": 1, "text": "Aunt" },
                    { "value": 2, "text": "Brother" },
                    { "value": 3, "text": "Cousin" },
                    { "value": 4, "text": "Daughter/Son-in-law" },
                    { "value": 5, "text": "Fiance/Fiancee" },
                    { "value": 6, "text": "Friend" },
                    { "value": 7, "text": "Grand Parent" },
                    { "value": 8, "text": "Mother/Father-in-law" },
                    { "value": 9, "text": "Nephew" },
                    { "value": 10, "text": "Niece" },
                    { "value": 11, "text": "Parent" },
                    { "value": 12, "text": "Sister" },
                    { "value": 13, "text": "Sister/Brother-in-law" },
                    { "value": 14, "text": "Spouse/De Facto Partner" },
                    { "value": 15, "text": "Step Parent" },
                    { "value": 16, "text": "Step-brother" },
                    { "value": 17, "text": "Step-sister" },
                    { "value": 18, "text": "Uncle" }
                ],
                name: "page13_accommodationAndWelfareArrangements_relationshipToPrimaryApplicant",
                title: "Relationship to the primary applicant",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes",
                isRequired: true,
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                type: "radiogroup",
                name: "page13_accommodationAndWelfareArrangements_haveCurrrentPassword",
                title: "Does the guardian have a current passport?",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
                isRequired: true,
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_firstName",
                title: "Family name",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_givenNames",
                title: "Given names",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
            },
            {
                type: "radiogroup",
                name: "page13_accommodationAndWelfareArrangements_sex",
                title: "Sex",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
                choices: ["Male", "Female", "Other"]
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_dateOfBirth",
                title: "Date of birth",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
                "inputType": "date",
                "isRequired": true,
                "maxValueExpression": "today()",
            },
            {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_passportNumber",
                title: "Passport number",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
            },
            {
                type: "dropdown",
                name: "page13_accommodationAndWelfareArrangements_countryOfPassport",
                title: "Country of passport",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }
            },
            {
                type: "dropdown",
                name: "page13_accommodationAndWelfareArrangements_nationalityOfPassport",
                title: "Nationality of passport holder",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }
            }, {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_dateOfIssue",
                title: "Date of issue",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
                "inputType": "date",
                "isRequired": true,
                "maxValueExpression": "today()",
            }, {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_dateOfExpiry",
                title: "Date of expiry",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
                "inputType": "date",
                "isRequired": true,
                "minValueExpression": "today()",
            }, {
                type: "text",
                name: "page13_accommodationAndWelfareArrangements_placeOfIssue",
                title: "Place of issue / issuing authority",
                isRequired: true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes and {page13_accommodationAndWelfareArrangements_haveCurrrentPassword}=yes ",
            },
            {
                "type": "text",
                "name": "page13_accommodationAndWelfareArrangements_townCity",
                "title": "Town / City",
                "isRequired": true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
            },
            {
                "type": "text",
                "name": "page13_accommodationAndWelfareArrangements_stateProvince",
                "title": "State / Province",
                "isRequired": true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
            },
            {
                'type': "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                },
                "name": "page13_accommodationAndWelfareArrangements_countryOfBirth",
                "title": "Country of birth",
                "isRequired": true,
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
            },

            {
                type: "radiogroup",
                name: "page13_accommodationAndWelfareArrangements_otherNames",
                title: "Is this guardian currently, or have they ever been known by any other names?",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                isRequired: true,
                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
                ,
            },
            {
                "type": "paneldynamic",
                "name": "page13_accommodationAndWelfareArrangements_otherNames_details",

                "title": "Add details",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_otherNames} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        "type": "text",
                        "name": "page13_otherNames_details_familyName",
                        "title": "Family name",
                        "isRequired": true,
                    },
                    {
                        "type": "text",
                        "name": "page13_otherNames_details_givenNames",
                        "title": "Given names",
                        "isRequired": true,
                    },

                    {
                        'type': "dropdown",
                        'choices': [{ "value": "1", "text": "Deed Poll" }, { "value": "2", "text": "Marriage" }, { "value": "3", "text": "Other" }],
                        "name": "page13_otherNames_details_reasonForNameChange",
                        "title": "Reason for name change",
                        "isRequired": true,
                    }]
            },
            {
                "type": "radiogroup",
                "name": "page13_accommodationAndWelfareArrangements_citizenOfPassport",
                "title": "Is this guardian a citizen of the country of passport?",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                isRequired: true,

                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }]
            },
            {
                'type': "radiogroup",
                "name": "page13_accommodationAndWelfareArrangements_citizenOfOtherCountry",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",


                "title": "Is this guardian a citizen of any other country?",
                "isRequired": true,

                "choices": [
                    {
                        value: "yes",
                        text: 'Yes',
                    },
                    {
                        value: "no",
                        text: 'No'
                    }],
            },
            {
                "type": "paneldynamic",
                "name": "page13_accommodationAndWelfareArrangements_citizenOfOtherCountry_countries",
                "title": "Add country",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_citizenOfOtherCountry} = yes",
                "confirmDelete": true,
                "panelCount": 1,
                "templateElements": [
                    {
                        'type': "dropdown",
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        },
                        "name": "page13_citizenOfOtherCountry_country",
                        "title": "List countries",
                        "isRequired": true,
                    }]
            },

            {
                'type': "dropdown",
                "name": "page13_accommodationAndWelfareArrangements_legalStatus",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
                "title": "Guardian's legal status in Australia",
                "isRequired": true,

                "choices": [
                    {
                        value: 1,
                        text: 'Australian citizen or permanent resident',
                    },
                    {
                        value: 2,
                        text: 'Student Guardian visa holder'
                    }, {
                        value: 3,
                        text: "Temporary resident other than a Student Guardian visa"
                    }],
            },
            {
                'type': "text",
                "name": "page13_accommodationAndWelfareArrangements_visaDetails",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_legalStatus} = 2 or {page13_accommodationAndWelfareArrangements_legalStatus} = 3    ",
                "title": "Visa details",
                "isRequired": true,
            },
            {
                'type': "text",
                "name": "page13_accommodationAndWelfareArrangements_periodOfStay",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_legalStatus} = 3    ",
                "title": "Period of permitted stay in Australia",
                "isRequired": true,
            },
            {
                name: "page13_accommodationAndWelfareArrangements_country",
                title: "Country",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",
                isRequired: true,
                requiredErrorText: "'Country' is a required field.",
                type: "dropdown",
                "choicesByUrl": {
                    "url": "https://surveyjs.io/api/CountriesExample",
                    "valueName": "name"
                }

            }, {

                name: "page13_accommodationAndWelfareArrangements_address",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                title: "Address",
                isRequired: true,
                requiredErrorText: "'Address' is a required field.",
                type: "text",

            },
            {

                name: "page13_accommodationAndWelfareArrangements_suburb",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                title: "Suburb / Town",
                type: "text",

            },
            {
                name: "page13_accommodationAndWelfareArrangements_state",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                title: "State or Province",
                type: "dropdown",
            },
            {
                name: "page13_accommodationAndWelfareArrangements_postalCode",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

                title: "Postal code",
                type: "text",
            },

            {
                name: "page13_accommodationAndWelfareArrangements_businessPhone",
                title: "Business phone",
                type: "text",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

            },
            {
                name: "page13_accommodationAndWelfareArrangements_homePhone",
                title: "Home phone",
                type: "text",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

            },
            {
                name: "page13_accommodationAndWelfareArrangements_mobilePhone",
                title: "Mobile / Cell phone",
                type: "text",
                "visibleIf": "{page13_accommodationAndWelfareArrangements_atleast21} = yes  or {page13_accommodationAndWelfareArrangements_stayInAustralia}=yes  ",

            },

            ]
        },

        {
            name: "page14",
            title: "Genuine student",
            elements: [
                {
                    name: "page14_genuineStudent_currentCircumstances",
                    title: "Give details of the applicant's current circumstances, including ties to family, community, employment and economic circumstances.",
                    isRequired: true,
                    type: "comment",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 1000,
                    }]
                },
                {
                    name: "page14_genuineStudent_whyWishsToStudy",
                    title: "Explain why the applicant wishes to study this course in Australia with this particular education provider including their understanding of the requirements of the intended course and studying and living in Australia.",
                    isRequired: true,
                    type: "comment",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 1000,
                    }]
                }, {
                    name: "page14_genuineStudent_benefit",
                    title: "Explain how completing the course will be of benefit to the applicant.",
                    isRequired: true,
                    type: "comment",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 1000,
                    }]
                }, {
                    name: "page14_genuineStudent_otherInformation",
                    title: "Give details of any other relevant information the applicant would like to include.",
                    isRequired: true,
                    type: "comment",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 1000,
                    }]
                },
            ]
        },

        {
            name: "page15",
            title: "Funding for stay",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page15_fundingForStay_sufficientFunds",
                    title: "Do all applicants in this application confirm that they each have access to sufficient funds to support themselves for the total period of stay in Australia and understand that further evidence of funds may also be requested?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    choices: [{ value: 1, text: "Government scholarship / financial support" }, { value: 2, text: "Other organisation scholarship / financial support" },
                    { value: 3, text: "Financial support from an individual" }, { value: 4, text: "Other financial support" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves",
                    title: "Show how each applicant included in the application will support themselves in Australia to meet living, tuition and school costs. Select any that apply.?",
                    isRequired: true,
                    visibleIf: "{page15_fundingForStay_sufficientFunds} = yes",
                    type: "checkbox",
                },
                {
                    type: "dropdown",
                    choices: [{ value: 1, text: "Australian Commonwealth government" }, { value: 2, text: "Australian State and Territory government" }, { value: 3, text: "Foreign government" }, { value: 4, text: "Other" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government",
                    title: "Sponsoring organisation type",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves}  contains 1",
                    isRequired: true,
                },


                {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_organisationName",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                    title: "Sponsoring organisation name",
                    isRequired: true,
                    type: "text",

                }, {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_scholarshipName",
                    title: "Scholarship/Award name",
                    isRequired: true,
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",

                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_country",
                    title: "Country",
                    isRequired: true,
                    type: "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",

                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_organizationAddress_country",
                    title: "Country",
                    isRequired: true,
                    type: "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",

                }, {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_organizationAddress_address",
                    title: "Address",
                    isRequired: true,
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",

                },
                {

                    name: "ppage15_fundingForStay_showHowMuchSupportThemselves_government_organizationAddress_suburb",
                    title: "Suburb / Town",
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",

                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_organizationAddress_state",
                    title: "State or Province",
                    type: "dropdown",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_organizationAddress_postalCode",
                    title: "Postal code",
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },

                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_contactPerson_firstName",
                    title: "Family name",
                    isRequired: true,
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_contactPerson_givenNames",
                    title: "Given names",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_contactPerson_position",
                    title: "Position",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },

                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_contactPerson_phone",
                    title: "Business phone",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_government_contactPerson_mobile",
                    title: "Mobile / Cell phone",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves_government} =1 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=2 or {page15_fundingForStay_showHowMuchSupportThemselves_government}=3",
                },


                {
                    type: "dropdown",
                    choices: [{ value: 1, text: "Education provider" }, { value: 2, text: "International organisation" }, { value: 3, text: "Non-profit organisation" }, { value: 4, text: "Foreign country organisation" }, { value: 5, text: 'Other' }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation",
                    title: "Sponsoring organisation type",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves}  contains 2",
                    isRequired: true,
                },


                {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organisationName",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                    title: "Sponsoring organisation name",
                    isRequired: true,
                    type: "text",

                }, {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_scholarshipName",
                    title: "Scholarship/Award name",
                    isRequired: true,
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",

                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_country",
                    title: "Country",
                    isRequired: true,
                    type: "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organizationAddress_country",
                    title: "Country",
                    isRequired: true,
                    type: "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                }, {

                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organizationAddress_address",
                    title: "Address",
                    isRequired: true,
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {

                    name: "ppage15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organizationAddress_suburb",
                    title: "Suburb / Town",
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organizationAddress_state",
                    title: "State or Province",
                    type: "dropdown",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_organizationAddress_postalCode",
                    title: "Postal code",
                    type: "text",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },

                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_contactPerson_firstName",
                    title: "Family name",
                    isRequired: true,
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_contactPerson_givenNames",
                    title: "Given names",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_contactPerson_position",
                    title: "Position",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },

                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_contactPerson_phone",
                    title: "Business phone",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_contactPerson_mobile",
                    title: "Mobile / Cell phone",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} =1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=2  or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=3 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and  {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation}=4",
                },


                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation_other",
                    title: "Give details",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 2 and {page15_fundingForStay_showHowMuchSupportThemselves_otherOrganisation} = 5",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },




                {
                    type: "radiogroup",
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_individual",
                    title: "Will the funds be provided by an individual other than the applicant?",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3",
                    isRequired: true,
                },
                {
                    type: "dropdown",
                    choices: [{ value: 1, text: "Other" }, { value: 2, text: "Parent" }, { value: 3, text: "Spouse/De Facto Partner" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_relationship",
                    title: "Relationship to the applicant",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_individual} =yes",
                    isRequired: true,
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_otherRelationship",
                    title: "Other relationship",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_relationship} =1",
                    isRequired: true,
                },
                {
                    type: "dropdown",
                    choices: [{ value: 1, text: "Deposit in financial institution" }, { value: 2, text: "Loan from financial institution" }, { value: 3, text: "Ongoing income" }, { value: 4, text: "Other" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_fundType",
                    title: "Funding type",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3",
                    isRequired: true,
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_value",
                    title: "Value in Australian dollars (whole dollars only)",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3",
                    isRequired: true,
                },
                {
                    type: "text",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_fundType_ongoingIncome_financialInstitution",
                    title: "Financial institution",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 1 or {page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 2",
                    isRequired: true,
                },
                {
                    type: "radiogroup",
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_deposite_bankOwnName",
                    title: "Is the bank account in the applicant's own name?",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 1",
                    isRequired: true,
                },
                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_deposite_bankOwnName_details",
                    title: "Provide details of how the applicant will access the funds.",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 1 and {page15_fundingForStay_showHowMuchSupportThemselves_deposite_bankOwnName} = no",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    type: "radiogroup",
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_loan_bankOwnName",
                    title: "Have the funds been disbursed into the applicant's bank account?",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 2",
                    isRequired: true,
                },
                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_loan_bankOwnName_details",
                    title: "Provide details of how the applicant will access the funds.",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 2 and {page15_fundingForStay_showHowMuchSupportThemselves_loan_bankOwnName} = no",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_fundType_ongoingIncome_details",
                    title: "Provide details of the ongoing income. Example: wage, dividends, shares, allowances.",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 3",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },

                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_fundType_other",
                    title: "Provide details of the source of your funds and how you will access those funds. Example: details of family or friend providing funds.",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 3 and {page15_fundingForStay_showHowMuchSupportThemselves_fundType} = 4",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },


                {
                    type: "comment",
                    name: "page15_fundingForStay_showHowMuchSupportThemselves_other",
                    title: "Give details",
                    visibleIf: "{page15_fundingForStay_showHowMuchSupportThemselves} contains 4",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
            ]
        },

        {
            name: "page16",
            title: "Health insurance",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_student",
                    title: "Does the applicant have Overseas Student Health Cover (OSHC)?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_student_provider",
                    title: "Was the Overseas Student Health Cover (OSHC) organised by the applicant's education provider?",
                    visibleIf: "{page16_healthInsurance_student} = yes",

                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "dropdown",
                    name: "page16_healthInsurance_student_nameOfhealthInsurer",
                    title: "Name of health insurer",
                    visibleIf: "{page16_healthInsurance_student} = yes",
                    isRequired: true,
                    choices: [
                        { "value": "1", "text": "Australian Health Management" },
                        { "value": "2", "text": "BUPA Australia" },
                        { "value": "3", "text": "Medibank Private" },
                        { "value": "4", "text": "Allianz Global Assistance (subcontracted by Lysaght Peoplecare)" },
                        { "value": "5", "text": "nib OSHC" },
                        { "value": "6", "text": "Other" },
                    ]
                },
                {
                    type: "text",
                    name: "page16_healthInsurance_student_nameOfhealthInsurer_other",
                    title: "Name of other health insurer",
                    visibleIf: "{page16_healthInsurance_student} = yes",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_nameOfhealthInsurer_number",
                    title: "Insurance policy number",
                    visibleIf: "{page16_healthInsurance_student} = yes",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_nameOfhealthInsurer_dateFrom",
                    title: "Date from",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_student} = yes",
                    "inputType": "date",
                    "maxValueExpression": "today()",
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_nameOfhealthInsurer_dateTo",
                    title: "Date to",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_student} = yes",
                    "inputType": "date",
                    "minValueExpression": "today()",
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_student_otherInsurance",
                    title: "Does the applicant have other acceptable health insurance?",
                    visibleIf: "{page16_healthInsurance_student} = no",

                    isRequired: true,
                    type: "radiogroup",
                },

                {
                    type: "text",
                    name: "page16_healthInsurance_student_otherInsurance_nameOfhealthInsurer_other",
                    title: "Name of other health insurer",
                    visibleIf: "{page16_healthInsurance_student} = no and {page16_healthInsurance_student_otherInsurance}=yes",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_otherInsurance_nameOfhealthInsurer_number",
                    title: "Insurance policy number",
                    visibleIf: "{page16_healthInsurance_student} = no and {page16_healthInsurance_student_otherInsurance}=yes",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_otherInsurance_nameOfhealthInsurer_dateFrom",
                    title: "Date from",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_student} = no and {page16_healthInsurance_student_otherInsurance}=yes",
                    "inputType": "date",
                    "maxValueExpression": "today()",
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_student_otherInsurance_nameOfhealthInsurer_dateTo",
                    title: "Date to",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_student} = no and {page16_healthInsurance_student_otherInsurance}=yes",
                    "inputType": "date",
                    "minValueExpression": "today()",
                },




                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_familySameHealthInssurance",
                    title: "Are all accompanying family members covered by the same health insurance as the applicant?",
                    isRequired: true,
                    type: "radiogroup",
                }
                ,
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_familyOtherHealthInssurance",
                    visibleIf: "{page16_healthInsurance_familySameHealthInssurance} = no",
                    title: "Do the family member(s) have Overseas Student Health Cover (OSHC)?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "dropdown",
                    name: "page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer",
                    title: "Name of health insurer",
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = yes",
                    isRequired: true,
                    choices: [
                        { "value": "1", "text": "Australian Health Management" },
                        { "value": "2", "text": "BUPA Australia" },
                        { "value": "3", "text": "Medibank Private" },
                        { "value": "4", "text": "Allianz Global Assistance (subcontracted by Lysaght Peoplecare)" },
                        { "value": "5", "text": "nib OSHC" },
                        { "value": "6", "text": "Other" },
                    ]
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer_other",
                    title: "Name of other health insurer",
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = yes and {page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer} = 6",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer_number",
                    title: "Insurance policy number",
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = yes",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer_dateFrom",
                    title: "Date from",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = yes",
                    "inputType": "date",
                    "maxValueExpression": "today()",
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherHealthInssurance_nameOfhealthInsurer_dateTo",
                    title: "Date to",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = yes",
                    "inputType": "date",
                    "minValueExpression": "today()",
                },
                {
                    visibleIf: "{page16_healthInsurance_familyOtherHealthInssurance} = no",
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page16_healthInsurance_familyOtherAcceptableHealthInssurance",
                    title: "Do the family member(s) have other acceptable health insurance?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherAcceptableHealthInssurance_nameOfhealthInsurer_other",
                    title: "Name of other health insurer",
                    visibleIf: "{page16_healthInsurance_familyOtherAcceptableHealthInssurance} = yes ",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherAcceptableHealthInssurance_nameOfhealthInsurer_number",
                    title: "Insurance policy number",
                    visibleIf: "{page16_healthInsurance_familyOtherAcceptableHealthInssurance} = yes ",
                    isRequired: true,
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherAcceptableHealthInssurance_nameOfhealthInsurer_dateFrom",
                    title: "Date from",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_familyOtherAcceptableHealthInssurance} = yes ",
                    "inputType": "date",
                    "maxValueExpression": "today()",
                }
                , {
                    type: "text",
                    name: "page16_healthInsurance_familyOtherAcceptableHealthInssurance_nameOfhealthInsurer_dateTo",
                    title: "Date to",
                    isRequired: true,
                    visibleIf: "{page16_healthInsurance_familyOtherAcceptableHealthInssurance} = yes ",
                    "inputType": "date",
                    "minValueExpression": "today()",
                },
            ]
        },

        {
            name: "page17",
            title: "Education",
            elements: [
                {
                    choices: [
                        { value: 1, text: "Primary school" },
                        { value: 2, text: "Secondary school - Year 11 or lower or equivalent" },
                        { value: 3, text: "Secondary school - Year 12 or equivalent" },
                        { value: 4, text: "Vocational qualification - Advanced Diploma or equivalent" },
                        { value: 5, text: "Vocational qualification - Diploma or equivalent" },
                        { value: 6, text: "Vocational qualification - Cert I, II, III or IV or equivalent" },
                        { value: 7, text: "Bachelor degree (including honours) or equivalent" },
                        { value: 8, text: "Postgraduate diploma or certificate or equivalent" },
                        { value: 9, text: "Masters degree or equivalent" },
                        { value: 10, text: "Doctoral degree or equivalent" },
                        { value: 11, text: "Not completed any schooling" },
                        { value: 12, text: "Other" }
                    ],
                    name: "page17_education_highestLevelOfSchooling",
                    title: "Highest level of schooling completed",
                    isRequired: true,
                    type: "dropdown",
                },
                {
                    type: "text",
                    name: "page17_education_highestLevelOfSchooling_courseName",
                    title: "Course name",
                    isRequired: true,
                    "visibleIf": "{page17_education_highestLevelOfSchooling} = 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9 or 10 ",

                },
                {
                    type: "text",
                    name: "page17_education_highestLevelOfSchooling_institutionName",
                    title: "Institution name",
                    isRequired: true,
                    "visibleIf": "{page17_education_highestLevelOfSchooling} = 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9 or 10 ",

                }
                , {
                    name: "page17_education_highestLevelOfSchooling_country",
                    title: "Country of institution",
                    isRequired: true,
                    type: "dropdown",
                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    },
                    "visibleIf": "{page17_education_highestLevelOfSchooling} = 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9 or 10 ",
                },
                {
                    name: "page17_education_highestLevelOfSchooling_other",
                    title: "Give details",
                    "visibleIf": "{page17_education_highestLevelOfSchooling} = 12 ",
                    isRequired: true,
                    type: "comment",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page17_education_enrollingOutsideAustralia",
                    title: "Has the applicant completed, or is currently enrolled in any other studies or training outside Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page17_education_enrollingOutsideAustralia_details",
                    "title": "Add details",
                    "visibleIf": "{page17_education_enrollingOutsideAustralia} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            choices: [
                                { value: 1, text: "Doctoral Degree in Science, Business or Technology" },
                                { value: 2, text: "Doctoral Degree (Other)" },
                                { value: 3, text: "Masters Degree in Science, Business or Technology" },
                                { value: 4, text: "Masters Degree (Other)" },
                                { value: 5, text: "Honours Degree in Science, Business or Technology" },
                                { value: 6, text: "Honours Degree (Other)" },
                                { value: 7, text: "Bachelor Degree in Science, Business or Technology" },
                                { value: 8, text: "Bachelor Degree (Other)" },
                                { value: 9, text: "Graduate Diploma" },
                                { value: 10, text: "Other qualification or award recognised by assessing authority" },
                                { value: 11, text: "Advanced Diploma" },
                                { value: 12, text: "Associate Degree" },
                                { value: 13, text: "Diploma" },
                                { value: 14, text: "AQF Certificate IV" },
                                { value: 15, text: "AQF Certificate III" },
                                { value: 16, text: "Certificate III (non-AQF)" },
                                { value: 17, text: "Senior Secondary School Certificate" },
                                { value: 18, text: "Other - Non AQF accreditation" },
                                { value: 19, text: "Other" }

                            ],
                            name: "page17_education_enrollingOutsideAustralia_qualification",
                            title: "Qualification",
                            isRequired: true,
                            type: "dropdown",
                        },
                        {
                            choices: [
                                { value: "0801", text: "Accounting" },
                                { value: "0315", text: "Aerospace Engineering and Technology" },
                                { value: "0501", text: "Agriculture" },
                                { value: "0401", text: "Architecture and Urban Environment" },
                                { value: "0305", text: "Automotive Engineering and Technology" },
                                { value: "0811", text: "Banking, Finance and Related Fields" },
                                { value: "0907", text: "Behavioural Science" },
                                { value: "0109", text: "Biological Sciences" },
                                { value: "0403", text: "Building" },
                                { value: "0803", text: "Business and Management" },
                                { value: "0105", text: "Chemical Sciences" },
                                { value: "0309", text: "Civil Engineering" },
                                { value: "1007", text: "Communication and Media Studies" },
                                { value: "0619", text: "Complementary Therapies" },
                                { value: "0201", text: "Computer Science" },
                                { value: "0703", text: "Curriculum and Education Studies" },
                                { value: "0607", text: "Dental Studies" },
                                { value: "0107", text: "Earth Sciences" },
                                { value: "0919", text: "Economics and Econometrics" },
                                { value: "0313", text: "Electrical and Electronic Engineering and Technology" },
                                { value: "1205", text: "Employment Skills Programmes" },
                                { value: "0509", text: "Environmental Studies" },
                                { value: "0507", text: "Fisheries Studies" },
                                { value: "1101", text: "Food and Hospitality" },
                                { value: "0505", text: "Forestry Studies" },
                                { value: "1201", text: "General Education Programmes" },
                                { value: "0311", text: "Geomatic Engineering" },
                                { value: "1005", text: "Graphic and Design Studies" },
                                { value: "0503", text: "Horticulture and Viticulture" },
                                { value: "0905", text: "Human Welfare Studies and Services" },
                                { value: "0203", text: "Information Systems" },
                                { value: "0911", text: "Justice and Law Enforcement" },
                                { value: "0915", text: "Language and Literature" },
                                { value: "0909", text: "Law" },
                                { value: "0913", text: "Librarianship, Information Management and Curatorial Studies" },
                                { value: "0301", text: "Manufacturing Engineering and Technology" },
                                { value: "0317", text: "Maritime Engineering and Technology" },
                                { value: "0101", text: "Mathematical Sciences" },
                                { value: "0307", text: "Mechanical and Industrial Engineering and Technology" },
                                { value: "0601", text: "Medical Studies" },
                                { value: "0603", text: "Nursing" },
                                { value: "0809", text: "Office Studies" },
                                { value: "0609", text: "Optical Science" },
                                { value: "0599", text: "Other Agriculture, Environmental and Related Studies" },
                                { value: "1099", text: "Other Creative Arts" },
                                { value: "0799", text: "Other Education" },
                                { value: "0399", text: "Other Engineering and Related Technologies" },
                                { value: "0699", text: "Other Health" },
                                { value: "0299", text: "Other Information Technology" },
                                { value: "0899", text: "Other Management and Commerce" },
                                { value: "1299", text: "Other Mixed Field Programmes" },
                                { value: "0199", text: "Other Natural and Physical Sciences" },
                                { value: "0999", text: "Other Society and Culture" },
                                { value: "1001", text: "Performing Arts" },
                                { value: "1103", text: "Personal Services" },
                                { value: "0605", text: "Pharmacy" },
                                { value: "0917", text: "Philosophy and Religious Studies" },
                                { value: "0103", text: "Physics and Astronomy" },
                                { value: "0901", text: "Political Science and Policy Studies" },
                                { value: "0303", text: "Process and Resources Engineering" },
                                { value: "0613", text: "Public Health" },
                                { value: "0615", text: "Radiography" },
                                { value: "0617", text: "Rehabilitation Therapies" },
                                { value: "0805", text: "Sales and Marketing" },
                                { value: "1203", text: "Social Skills Programmes" },
                                { value: "0921", text: "Sport and Recreation" },
                                { value: "0903", text: "Studies in Human Society" },
                                { value: "0701", text: "Teacher Education" },
                                { value: "0807", text: "Tourism" },
                                { value: "0611", text: "Veterinary Studies" },
                                { value: "1003", text: "Visual Arts and Crafts" }
                            ],
                            name: "page17_education_enrollingOutsideAustralia_category",
                            title: "Category of study",
                            isRequired: true,
                            type: "dropdown",
                        },



                        {
                            type: "text",
                            name: "page17_education_enrollingOutsideAustralia_courseName",
                            title: "Course name",
                            isRequired: true,

                        },
                        {
                            type: "text",
                            name: "page17_education_enrollingOutsideAustralia_institutionName",
                            title: "Institution name",
                            isRequired: true,

                        }
                        , {
                            name: "page17_education_enrollingOutsideAustralia_country",
                            title: "Country of institution",
                            isRequired: true,
                            type: "dropdown",
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            },
                        },
                        {
                            type: "text",
                            name: "page17_education_enrollingOutsideAustralia_dateFrom",
                            title: "Date from",
                            isRequired: true,
                            "inputType": "date",
                            "maxValueExpression": "today()",
                        }
                        , {
                            type: "text",
                            name: "page17_education_enrollingOutsideAustralia_dateTo",
                            title: "Date to",
                            isRequired: true,
                            "inputType": "date",
                            "minValueExpression": "today()",
                        },


                    ]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page17_education_enrollingInAustralia",
                    title: "Has the applicant previously studied in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page17_education_enrollingInAustralia_details",
                    "title": "Add details",
                    "visibleIf": "{page17_education_enrollingInAustralia} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            choices: [
                                { value: 1, text: "Doctoral Degree in Science, Business or Technology" },
                                { value: 2, text: "Doctoral Degree (Other)" },
                                { value: 3, text: "Masters Degree in Science, Business or Technology" },
                                { value: 4, text: "Masters Degree (Other)" },
                                { value: 5, text: "Honours Degree in Science, Business or Technology" },
                                { value: 6, text: "Honours Degree (Other)" },
                                { value: 7, text: "Bachelor Degree in Science, Business or Technology" },
                                { value: 8, text: "Bachelor Degree (Other)" },
                                { value: 9, text: "Graduate Diploma" },
                                { value: 10, text: "Other qualification or award recognised by assessing authority" },
                                { value: 11, text: "Advanced Diploma" },
                                { value: 12, text: "Associate Degree" },
                                { value: 13, text: "Diploma" },
                                { value: 14, text: "AQF Certificate IV" },
                                { value: 15, text: "AQF Certificate III" },
                                { value: 16, text: "Certificate III (non-AQF)" },
                                { value: 17, text: "Senior Secondary School Certificate" },
                                { value: 18, text: "Other - Non AQF accreditation" },
                                { value: 19, text: "Other" }

                            ],
                            name: "page17_education_enrollingInAustralia_qualification",
                            title: "Qualification",
                            isRequired: true,
                            type: "dropdown",
                        },
                        {
                            choices: [
                                { value: "0801", text: "Accounting" },
                                { value: "0315", text: "Aerospace Engineering and Technology" },
                                { value: "0501", text: "Agriculture" },
                                { value: "0401", text: "Architecture and Urban Environment" },
                                { value: "0305", text: "Automotive Engineering and Technology" },
                                { value: "0811", text: "Banking, Finance and Related Fields" },
                                { value: "0907", text: "Behavioural Science" },
                                { value: "0109", text: "Biological Sciences" },
                                { value: "0403", text: "Building" },
                                { value: "0803", text: "Business and Management" },
                                { value: "0105", text: "Chemical Sciences" },
                                { value: "0309", text: "Civil Engineering" },
                                { value: "1007", text: "Communication and Media Studies" },
                                { value: "0619", text: "Complementary Therapies" },
                                { value: "0201", text: "Computer Science" },
                                { value: "0703", text: "Curriculum and Education Studies" },
                                { value: "0607", text: "Dental Studies" },
                                { value: "0107", text: "Earth Sciences" },
                                { value: "0919", text: "Economics and Econometrics" },
                                { value: "0313", text: "Electrical and Electronic Engineering and Technology" },
                                { value: "1205", text: "Employment Skills Programmes" },
                                { value: "0509", text: "Environmental Studies" },
                                { value: "0507", text: "Fisheries Studies" },
                                { value: "1101", text: "Food and Hospitality" },
                                { value: "0505", text: "Forestry Studies" },
                                { value: "1201", text: "General Education Programmes" },
                                { value: "0311", text: "Geomatic Engineering" },
                                { value: "1005", text: "Graphic and Design Studies" },
                                { value: "0503", text: "Horticulture and Viticulture" },
                                { value: "0905", text: "Human Welfare Studies and Services" },
                                { value: "0203", text: "Information Systems" },
                                { value: "0911", text: "Justice and Law Enforcement" },
                                { value: "0915", text: "Language and Literature" },
                                { value: "0909", text: "Law" },
                                { value: "0913", text: "Librarianship, Information Management and Curatorial Studies" },
                                { value: "0301", text: "Manufacturing Engineering and Technology" },
                                { value: "0317", text: "Maritime Engineering and Technology" },
                                { value: "0101", text: "Mathematical Sciences" },
                                { value: "0307", text: "Mechanical and Industrial Engineering and Technology" },
                                { value: "0601", text: "Medical Studies" },
                                { value: "0603", text: "Nursing" },
                                { value: "0809", text: "Office Studies" },
                                { value: "0609", text: "Optical Science" },
                                { value: "0599", text: "Other Agriculture, Environmental and Related Studies" },
                                { value: "1099", text: "Other Creative Arts" },
                                { value: "0799", text: "Other Education" },
                                { value: "0399", text: "Other Engineering and Related Technologies" },
                                { value: "0699", text: "Other Health" },
                                { value: "0299", text: "Other Information Technology" },
                                { value: "0899", text: "Other Management and Commerce" },
                                { value: "1299", text: "Other Mixed Field Programmes" },
                                { value: "0199", text: "Other Natural and Physical Sciences" },
                                { value: "0999", text: "Other Society and Culture" },
                                { value: "1001", text: "Performing Arts" },
                                { value: "1103", text: "Personal Services" },
                                { value: "0605", text: "Pharmacy" },
                                { value: "0917", text: "Philosophy and Religious Studies" },
                                { value: "0103", text: "Physics and Astronomy" },
                                { value: "0901", text: "Political Science and Policy Studies" },
                                { value: "0303", text: "Process and Resources Engineering" },
                                { value: "0613", text: "Public Health" },
                                { value: "0615", text: "Radiography" },
                                { value: "0617", text: "Rehabilitation Therapies" },
                                { value: "0805", text: "Sales and Marketing" },
                                { value: "1203", text: "Social Skills Programmes" },
                                { value: "0921", text: "Sport and Recreation" },
                                { value: "0903", text: "Studies in Human Society" },
                                { value: "0701", text: "Teacher Education" },
                                { value: "0807", text: "Tourism" },
                                { value: "0611", text: "Veterinary Studies" },
                                { value: "1003", text: "Visual Arts and Crafts" }
                            ],
                            name: "page17_education_enrollingInAustralia_category",
                            title: "Category of study",
                            isRequired: true,
                            type: "dropdown",
                        },

                        {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_courseName",
                            title: "Course name",
                            isRequired: true,

                        },
                        {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_institutionName",
                            title: "Institution name",
                            isRequired: true,

                        },
                        {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_campus",
                            title: "Campus",
                            isRequired: true,

                        },
                        {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_postcode",
                            title: "Postcode of campus",
                            isRequired: true,

                        },


                        {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_dateFrom",
                            title: "Date from",
                            isRequired: true,
                            "inputType": "date",
                            "maxValueExpression": "today()",
                        }
                        , {
                            type: "text",
                            name: "page17_education_enrollingInAustralia_dateTo",
                            title: "Date to",
                            isRequired: true,
                            "inputType": "date",
                            "minValueExpression": "today()",
                        },


                    ]
                },
            ]
        },

        {
            name: "page19",
            title: "Language",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page19_undertakenEnglishTest",
                    title: "Has the applicant undertaken an English language test within the last 24 months?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    choices: [
                        { "value": "CAE", "text": "Cambridge English: Advanced (CAE)" },
                        { "value": "IELTS", "text": "IELTS" },
                        { "value": "OET", "text": "OET" },
                        { "value": "PTE", "text": "PTE Academic" },
                        { "value": "TOEFLIBT", "text": "TOEFL iBT" },
                        { "value": "TOEFLPBT", "text": "TOEFL PBT" }
                    ],
                    name: "page19_englishTestDetails_nameOfTest",
                    visibleIf: "{page19_undertakenEnglishTest} = yes",
                    title: "Name of test",
                    isRequired: true,
                    type: "dropdown",
                },
                {
                    type: "text",
                    visibleIf: "{page19_undertakenEnglishTest} = yes",
                    name: "page19_englishTestDetails_dateOfTest",
                    title: "Date of test",
                    isRequired: true,
                    "inputType": "date",
                    "maxValueExpression": "today()",
                },
                {
                    type: "text",
                    visibleIf: "{page19_undertakenEnglishTest} = yes",
                    name: "page19_englishTestDetails_referenceNumber",
                    title: "Test reference number",
                    isRequired: true,
                },
                {
                    type: "dropdown",
                    name: "page19_englishTestDetails_country",
                    title: "Country where test was undertaken",
                    isRequired: true,
                    visibleIf: "{page19_undertakenEnglishTest} = yes",



                    "choicesByUrl": {
                        "url": "https://surveyjs.io/api/CountriesExample",
                        "valueName": "name"
                    }


                }, {
                    type: "text",
                    visibleIf: "{page19_undertakenEnglishTest} = yes",
                    name: "page19_englishTestDetails_testScore",
                    title: "Overall test score",
                    isRequired: true,
                },
                {
                    type: "dropdown",
                    name: "page19_mainLanguage",
                    title: "Main language",
                    isRequired: true,
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page19_studyInEnglish_fiveYears",
                    title: "Has the applicant successfully completed at least five years study (in the English language) in Australia, Canada, New Zealand, Republic of South Africa, Republic of Ireland, United Kingdom and/or United States of America?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    choices: [
                        { "value": "1", "text": "Select an option" },
                        { "value": "2", "text": "AUSTRALIA" },
                        { "value": "3", "text": "CANADA" },
                        { "value": "4", "text": "IRELAND" },
                        { "value": "5", "text": "NEW ZEALAND" },
                        { "value": "6", "text": "SOUTH AFRICA" },
                        { "value": "7", "text": "UNITED KINGDOM" },
                        { "value": "8", "text": "UNITED STATES" }
                    ],
                    name: "page19_studyInEnglish_fiveYears_country",
                    title: "Indicate all countries that apply",
                    visibleIf: "{page19_studyInEnglish_fiveYears} = yes",
                    isRequired: true,
                    type: "checkbox",
                },
                {
                    type: "comment",
                    name: "page19_studyInEnglish_fiveYears_details",
                    title: "Give details of the highest academic qualification the applicant has obtained from the countries indicated above",
                    visibleIf: "{page19_studyInEnglish_fiveYears} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page19_studyInEnglish_twoYearsSeniorSecondary",
                    title: "In the two years before applying for the Student visa, has the applicant successfully completed the requirements for a Senior Secondary Certificate of Education (conducted in English in Australia)?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page19_studyInEnglish_twoYearsSubstantialComponent",
                    title: "In the two years before applying for the Student visa, has the applicant successfully completed a substantial component of a course leading to a qualification from the Australian Qualifications Framework at Certificate IV or higher as a holder of a Student visa (conducted in English in Australia)?",
                    isRequired: true,
                    type: "radiogroup",
                },




            ]
        },

        {
            name: "page21",
            title: "Visa history",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page21_visaHistory_currentVisa",
                    title: "Has the applicant, or any person included in this application, held or currently hold a visa to Australia or any other country?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    type: "comment",
                    name: "page21_visaHistory_currentVisa_details",
                    title: "Give details",
                    visibleIf: "{page21_visaHistory_currentVisa} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 2000,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page21_visaHistory_departed",
                    title: "Has the applicant, or any person included in this application, ever been in Australia or any other country and not complied with visa conditions or departed outside their authorised period of stay?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    type: "comment",
                    name: "page21_visaHistory_departed_details",
                    title: "Give details",
                    visibleIf: "{page21_visaHistory_departed} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 2000,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page21_visaHistory_cancelled",
                    title: "Has the applicant, or any person included in this application, ever had an application for entry or further stay in Australia or any other country refused, or had a visa cancelled?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    type: "comment",
                    name: "page21_visaHistory_cancelled_details",
                    title: "Give details",
                    visibleIf: "{page21_visaHistory_cancelled} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 2000,
                    }]
                },
            ]
        },
        {
            name: "page22",
            title: "Health declarations",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_liveOutsideTheirCountry",
                    title: "In the last five years, has any applicant visited, or lived, outside their country of passport, for more than 3 consecutive months? Do not include time spent in Australia.",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_liveOutsideTheirCountry_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_liveOutsideTheirCountry} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_liveOutsideTheirCountry_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "dropdown",
                            name: "page22_healthDeclarations_liveOutsideTheirCountry_details_country",
                            title: "Country",
                            isRequired: true,
                            "choicesByUrl": {
                                "url": "https://surveyjs.io/api/CountriesExample",
                                "valueName": "name"
                            }
                        }, {
                            type: "text",
                            name: "page22_healthDeclarations_liveOutsideTheirCountry_details_dateFrom",
                            title: "Date from",
                            isRequired: true,
                            "inputType": "date",
                            "maxValueExpression": "today()",
                        }
                        , {
                            type: "text",
                            name: "page22_healthDeclarations_liveOutsideTheirCountry_details_dateTo",
                            title: "Date to",
                            isRequired: true,
                            "inputType": "date",
                            "maxValueExpression": "today()",
                        },
                    ]
                },

                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility",
                    title: "Does any applicant intend to enter a hospital or a health care facility (including nursing homes) while in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "dropdown",
                            name: "page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility_details_reason",
                            title: "Reason",
                            isRequired: true,
                            choices: [
                                { value: 1, text: "Give birth" },
                                { value: 2, text: "Training" },
                                { value: 3, text: "Treatment" },
                                { value: 4, text: "Visiting" },
                                { value: 5, text: "Work" }
                            ]
                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_intendToEnterHospitalOrHealthCareFacility_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },


                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_intendToWorkInHeathCareFacility",
                    title: "Does any applicant intend to work as, or study or train to be, a health care worker or work within a health care facility while in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_intendToWorkInHeathCareFacility_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_intendToWorkInHeathCareFacility} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_intendToWorkInHeathCareFacility_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "dropdown",
                            name: "page22_healthDeclarations_intendToWorkInHeathCareFacility_details_role",
                            title: "Role",
                            isRequired: true,
                            choices: [
                                { "value": "AUDIO", "text": "Audiologist" },
                                { "value": "CHEMIST", "text": "Chemist or Pharmacist" },
                                { "value": "CHIRO", "text": "Chiropractor" },
                                { "value": "CLEANER", "text": "Cleaner" },
                                { "value": "DENT_ASST", "text": "Dental Nurse or assistant" },
                                { "value": "DENT_TECH", "text": "Dental Technician" },
                                { "value": "DENTIST", "text": "Dentist" },
                                { "value": "DIETICIAN", "text": "Dietician" },
                                { "value": "DOCTOR", "text": "Doctor" },
                                { "value": "DOMESTIC", "text": "Food service or domestic worker" },
                                { "value": "MAINT_WRK", "text": "Maintenance worker" },
                                { "value": "MED_ADM", "text": "Medical administrator" },
                                { "value": "MED_TECH", "text": "Medical technician" },
                                { "value": "NURSE", "text": "Nurse" },
                                { "value": "OCCP_THERP", "text": "Occupational therapist" },
                                { "value": "OPTOMETST", "text": "Optometrist" },
                                { "value": "OSTEOPATH", "text": "Osteopath" },
                                { "value": "PARAMEDIC", "text": "Paramedic" },
                                { "value": "PATIENT", "text": "Patient Transport officer" },
                                { "value": "PHYSIO", "text": "Physiotherapist" },
                                { "value": "PSYCHO", "text": "Psychologist" },
                                { "value": "RADIO", "text": "Radiographer" },
                                { "value": "RECEPTION", "text": "Receptionist" },
                                { "value": "SOCIAL", "text": "Social Worker or counsellor" },
                                { "value": "SONO", "text": "Sonographer" },
                                { "value": "SPEECH", "text": "Speech pathologist" },
                                { "value": "WARD", "text": "Ward clerk" },
                                { "value": "OTHER", "text": "Other (Give details)" }
                            ]

                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_intendToWorkInHeathCareFacility_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare",
                    title: "Does any applicant intend to work, study or train within aged care or disability care while in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },

                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "dropdown",
                            name: "page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare_details_role",
                            title: "Role",
                            isRequired: true,
                            choices: [
                                { "value": 1, "text": "Aged Care" },
                                { "value": 2, "text": "Disability Support" },
                            ]

                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_intendToWorkInAgedCareOrDisabilityCare_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },

                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_intendToWorkInChildCareCentre",
                    title: "Does any applicant intend to work or be a trainee at a child care centre (including preschools and creches) while in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_intendToWorkInChildCareCentre_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_intendToWorkInChildCareCentre} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_intendToWorkInChildCareCentre_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_intendToWorkInChildCareCentre_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_abnormalChestXray",
                    title: "ever had a chest x-ray which showed an abnormality?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_abnormalChestXray_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_abnormalChestXray} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_abnormalChestXray_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_abnormalChestXray_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_illness",
                    title: "blood disorder,cancer,heart disease,hepatitis B or C and/ or liver disease,HIV infection, including AIDS, kidney disease, including dialysis, mental illness, pregnancy,respiratory disease that has required hospital admission or oxygen therapy, other?",
                    isRequired: true,
                    type: "radiogroup",
                },

                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_illness_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_illness} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_illness_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "dropdown",
                            name: "page22_healthDeclarations_illness_details_condition",
                            title: "Condition",
                            isRequired: true,
                            choices: [
                                { "value": "1", "text": "Blood disorder" },
                                { "value": "2", "text": "Cancer" },
                                { "value": "3", "text": "Heart disease" },
                                { "value": "4", "text": "Hepatitis B or C and/or liver disease" },
                                { "value": "5", "text": "HIV infection, including AIDS" },
                                { "value": "6", "text": "Kidney disease, including dialysis" },
                                { "value": "7", "text": "Mental illness" },
                                { "value": "8", "text": "Pregnancy" },
                                { "value": "9", "text": "Respiratory disease that has required hospital admission or oxygen therapy" },
                                { "value": "99", "text": "Other" }
                            ]


                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_illness_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page22_healthDeclarations_requiredMedicalCare",
                    title: "Does any applicant require ongoing medical care or need special equipment, assistive technology or assistance from others for daily living?",
                    isRequired: true,
                    type: "radiogroup",
                },
                {
                    "type": "paneldynamic",
                    "name": "page22_healthDeclarations_requiredMedicalCare_details",
                    "title": "Add details",
                    "visibleIf": "{page22_healthDeclarations_requiredMedicalCare} = yes",
                    "confirmDelete": true,
                    "panelCount": 1,
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "page22_healthDeclarations_requiredMedicalCare_details_name",
                            "title": "name",
                            "isRequired": true,
                        },
                        {
                            type: "comment",
                            name: "page22_healthDeclarations_requiredMedicalCare_details_giveDetails",
                            title: "Give details",
                            isRequired: true,
                            validators: [{
                                type: "text",
                                maxLength: 300,
                            }]
                        },
                    ]
                },


            ]
        },


        {
            name: "page23",
            title: "Declaration",
            elements: [
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_chargedWithOffence",
                    title: "Has any applicant ever been charged with any offence that is currently awaiting legal action?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_chargedWithOffence_details",
                    title: "Give details",
                    visibleIf: "{page23_chargedWithOffence} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_convictedOffenceInAnyCountry",
                    title: "Has any applicant ever been convicted of an offence in any country (including any conviction which is now removed from official records)?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_convictedOffenceInAnyCountry_details",
                    title: "Give details",
                    visibleIf: "{page23_convictedOffenceInAnyCountry} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_domesticViolence",
                    title: "Has any applicant ever been the subject of a domestic violence or family violence order, or any other order, of a tribunal or court or other similar authority, for the personal protection of another person?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_domesticViolence_details",
                    title: "Give details",
                    visibleIf: "{page23_domesticViolence} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_arrestWarrantOrInterpolNotice",
                    title: "Has any applicant ever been the subject of an arrest warrant or Interpol notice?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_arrestWarrantOrInterpolNotice_details",
                    title: "Give details",
                    visibleIf: "{page23_arrestWarrantOrInterpolNotice} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_sexuallyBasedOffence",
                    title: "Has any applicant ever been found guilty of a sexually based offence involving a child (including where no conviction was recorded)?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_sexuallyBasedOffence_details",
                    title: "Give details",
                    visibleIf: "{page23_sexuallyBasedOffence} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_sexOffenderRegister",
                    title: "Has any applicant ever been named on a sex offender register?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_sexOffenderRegister_details",
                    title: "Give details",
                    visibleIf: "{page23_sexOffenderRegister} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_acquittedOfAnyOffence",
                    title: "Has any applicant ever been acquitted of any offence on the grounds of unsoundness of mind or insanity?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_acquittedOfAnyOffence_details",
                    title: "Give details",
                    visibleIf: "{page23_acquittedOfAnyOffence} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_fitToPlead",
                    title: "Has any applicant ever been found by a court not fit to plead?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_fitToPlead_details",
                    title: "Give details",
                    visibleIf: "{page23_fitToPlead} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_riskToNationalSecurity",
                    title: "Has any applicant ever been directly or indirectly involved in, or associated with, activities which would represent a risk to national security in Australia or any other country?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_riskToNationalSecurity_details",
                    title: "Give details",
                    visibleIf: "{page23_riskToNationalSecurity} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_genocideOrWarCrimes",
                    title: "Has any applicant ever been charged with, or indicted for: genocide, war crimes, crimes against humanity, torture, slavery, or any other crime that is otherwise of a serious international concern?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_genocideOrWarCrimes_details",
                    title: "Give details",
                    visibleIf: "{page23_genocideOrWarCrimes} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_associatedWithOrganisationEngagedInViolence",
                    title: "Has any applicant ever been associated with an organisation engaged in violence or engaged in acts of violence (including war, insurgency, freedom fighting, terrorism, protest) either overseas or in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_associatedWithOrganisationEngagedInViolence_details",
                    title: "Give details",
                    visibleIf: "{page23_associatedWithOrganisationEngagedInViolence} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_serveInMilitaryForce",
                    title: "Has any applicant ever served in a military force, police force, state sponsored / private militia or intelligence agency (including secret police)?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_serveInMilitaryForce_details",
                    title: "Give details",
                    visibleIf: "{page23_serveInMilitaryForce} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_undergoneMilitaryOrParamilitaryTraining",
                    title: "Has any applicant ever undergone any military/paramilitary training, been trained in weapons/explosives or in the manufacture of chemical/biological products?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_undergoneMilitaryOrParamilitaryTraining_details",
                    title: "Give details",
                    visibleIf: "{page23_undergoneMilitaryOrParamilitaryTraining} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_involvedInSmugglingOrTrafficking",
                    title: "Has any applicant ever been involved in people smuggling or people trafficking offences?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_involvedInSmugglingOrTrafficking_details",
                    title: "Give details",
                    visibleIf: "{page23_involvedInSmugglingOrTrafficking} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_removedDeportedOrExcluded",
                    title: "Has any applicant ever been removed, deported or excluded from any country (including Australia)?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_removedDeportedOrExcluded_details",
                    title: "Give details",
                    visibleIf: "{page23_removedDeportedOrExcluded} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_overstayVisa",
                    title: "Has any applicant ever overstayed a visa in any country (including Australia)?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_overstayVisa_details",
                    title: "Give details",
                    visibleIf: "{page23_overstayVisa} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                },
                {
                    choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                    name: "page23_debts",
                    title: "Has any applicant ever had any outstanding debts to the Australian Government or any public authority in Australia?",
                    isRequired: true,
                    type: "radiogroup",
                }, {
                    type: "comment",
                    name: "page23_debts_details",
                    title: "Give details",
                    visibleIf: "{page23_debts} = yes",
                    isRequired: true,
                    validators: [{
                        type: "text",
                        maxLength: 300,
                    }]
                }]
        },



        {
            name: "page24",
            title: "Student declarations",

            elements: [{
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_readAndUnderstand",
                title: "Have read and understood the information provided on the website (https://www.studyaustralia.gov.au) regarding living and studying in Australia.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_healthInsurance",
                title: "Have made adequate arrangements for health insurance for the period of their stay in Australia and acknowledge they are required to maintain these arrangements while in Australia as the holder of a student visa if granted.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_studentVisa",
                title: "Acknowledge they are seeking to enter and remain in Australia as a genuine student whose primary purpose is to undertake and successfully complete a course of study.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_temporaryVisa",
                title: "Understand that a student visa is a temporary visa and that being granted a student visa will not guarantee that they will be eligible for the grant of a further visa to stay in Australia, including a skilled migration visa.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_furtherVisa",
                title: "Understand that if they cannot obtain a further visa they must depart Australia on or before the cease date of the student visa.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_visaConditions",
                title: "Acknowledge that if granted a student visa, they are required to understand and comply with all conditions imposed on the visa, including conditions that restrict their right to work in Australia.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_noFurtherStay",
                title: "Understand that if the 8534 visa condition is imposed on the student visa, it will be indicated by the condition code 8534 and by the short description 'No Further Stay's.They acknowledge that this means the 8534 condition has been imposed on their visa and while in Australia they will only be entitled to the grant of limited visas including:",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_furtherStay9534",
                title: "Understand that the effect of 8534 visa condition is that it will not be possible to apply to remain in Australia beyond the cessation date specified upon grant of the student visa and that they will be required to depart Australia on or before that date.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_furtherStay8535",
                title: "Understand that if the 8535 visa condition is imposed on the student visa, it will be indicated by the condition code 8535 and by the short description 'No Further Stay'. They acknowledge that this means that the 8535 condition has been imposed on their visa and while in Australia they will only be entitled to the grant of limited visas including:",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_9535",
                title: "Understand that the effect of the 8535 visa condition is that it will not be possible to remain in Australia beyond the cessation date specified upon the grant of the student visa, unless they are applying for a further student visa in circumstances where the Commonwealth or a foreign government (as the case requires) does not oppose them undertaking a relevant course of study, and that they will be required to depart Australia on or before the authorised date.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_underAge18",
                title: "Acknowledge their responsibility for organising appropriate accommodation and travel to and from Australia on behalf of the student visa holder under the age of 18.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page24_8532",
                title: "Are aware that condition 8532 will be imposed on the visa of the student under the age of 18 and will ensure that appropriate welfare arrangements are in place and maintained at all times.",
                isRequired: true,
                type: "radiogroup",
            }]
        },

        {
            name: "page25",
            title: "Declarations",

            elements: [{
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_readAndUnderstood",
                title: "Have read and understood the information provided to them in this application.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_correctInfo",
                title: "Have provided complete and correct information in every detail on this form, and on any attachments to it.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_midleading",
                title: "Understand that if any fraudulent documents or false or misleading information has been provided with this application, or if any of the applicants fail to satisfy the Minister of their identity, the application may be refused and the applicant(s), and any member of their family unit, may become unable to be granted a visa for a specified period of time.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_cancelled",
                title: "Understand that if documents are found to be fraudulent or information to be incorrect after the grant of a visa, the visa may subsequently be cancelled.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_automaticRight",
                title: "Understand that if this application is approved, any person not included in this application will not have automatic right of entry to Australia.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_immediatelyNotify",
                title: "Will immediately notify the Department in writing about any changes to their email or residential address, course enrolment, or members of their family unit, or changes to any information they provided in their application, while this application is being considered.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_privacyNotice",
                title: "Have read the information contained in the Privacy Notice (Form 1442i).",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_CollectInfo",
                title: "Understand that the department may collect, use and disclose the applicant's personal information (including biometric information and other sensitive information) as outlined in the Privacy Notice (Form 1442i).",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_fingerprints",
                title: "Give consent to the collection of their fingerprints and facial image if required.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_fingerPrintsGivenToAustralian",
                title: "Understand that, if required to provide their fingerprints and facial image, the applicant's fingerprints and facial image and biographical information held by the Department may be given to Australian law enforcement agencies to help identify the applicant and determine eligibility for grant of the visa being applied for, and for law enforcement purposes.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_biometricInfoEligiblity",
                title: "Give consent to Australian law enforcement agencies disclosing the applicant's biometric, biographical and criminal record information to the Department to help identify the applicant, to determine eligibility for grant of a visa and for law enforcement purposes.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_biometricCriminalRecord",
                title: "Give consent to the Department using the applicant's biometric, biographical and criminal record information obtained for the purposes of the Migration Act 1958 or the Citizenship Act 2007.",
                isRequired: true,
                type: "radiogroup",
            },
            {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_visaCeaseToBeInEffect",
                title: "I understand that if my visa ceases to be in effect and I do not hold another visa to remain in Australia at that time, I will be an unlawful non-citizen under the Migration Act 1958. As such, I will be expected to depart from Australia, and be subject to removal under the Migration Act 1958.",
                isRequired: true,
                type: "radiogroup",
            }, {
                choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
                name: "page25_18YearsOrOver",
                title: "Each applicant who is 18 years or over has read, or had explained to them, information provided by the Australian Government on Australian society and values, and agrees to the Australian values statement.",
                isRequired: true,
                type: "radiogroup",
            }
            ]
        },




    ],
    "showQuestionNumbers": false,

}

const survey = new Survey.Model(surveyJson);




