export type SourceLink = {
  label: string
  url: string
}

export type ChecklistItem = {
  id: string
  title: string
  body: string
  sources: SourceLink[]
}

export type ChecklistSection = {
  id: string
  title: string
  items: ChecklistItem[]
}

export const SECTIONS: ChecklistSection[] = [
  {
    id: 'today',
    title: 'Do today',
    items: [
      {
        id: 'separation-notice',
        title: 'Save your separation documents',
        body: `<p>Keep a record of your layoff and confirm you received the required California notices.</p><ul><li><strong>Save your layoff letter or HR email:</strong> keep details about your last day and reason for separation.</li><li><strong>Check for required EDD notices:</strong> look for the Notice to Employee as to Change in Relationship and For Your Benefit (DE 2320) pamphlet. Missing either? Ask HR for a copy.</li><li><strong>Keep copies for your records:</strong> you can also request copies of your personnel and payroll records.</li></ul>`,
        sources: [
          {
            label: 'California EDD — Required Notices and Pamphlets',
            url: 'https://edd.ca.gov/en/payroll_taxes/step-7-provide-required-notices/',
          },
        ],
      },
      {
        id: 'final-paycheck',
        title: 'Check your final paycheck',
        body: `<p>In California, final wages are generally due immediately when you're laid off or discharged. If you're on WARN notice, your final-paycheck deadline generally depends on when your employment actually ends—not when you receive the notice.</p><ul><li><strong>Confirm your separation date:</strong> If you're still employed during the WARN period, regular pay generally continues on your normal payday. Check your official separation date with HR.</li><li><strong>Check your final pay:</strong> Verify wages owed, earned commissions, and unused vacation/PTO. Unused sick leave generally doesn't have to be paid out.</li><li><strong>Know what you're owed:</strong> WARN-related pay, severance, and final wages may be treated differently. Check your separation documents to understand what each payment covers.</li><li><strong>Follow up if anything is missing:</strong> If final wages are late or incorrect, contact the California Labor Commissioner's Office. A waiting-time penalty of up to 30 days' wages may apply if the legal requirements are met.</li></ul>`,
        sources: [
          {
            label: 'California Labor Commissioner — Final Wages',
            url: 'https://www.dir.ca.gov/dlse/faq_waitingtimepenalty.htm',
          },
          {
            label: 'California EDD — WARN',
            url: 'https://edd.ca.gov/en/jobs_and_training/Layoff_Services_WARN',
          },
        ],
      },
      {
        id: 'severance',
        title:
          'Review your severance offer, if you have one (before signing anything)',
        body: `<p>California generally does not require employers to offer severance unless a contract or company policy provides for it. If you receive an offer, read it carefully before signing; you can ask for time to review it.</p><ul><li><strong>Understand what you're giving up:</strong> severance agreements often require you to release certain legal claims.</li><li><strong>Check your deadline:</strong> if you're 40 or older, a waiver of federal age-discrimination claims generally requires at least 21 days to consider the agreement—or 45 days for certain group termination programs—and 7 days after signing to revoke it. These rules don't apply to every severance agreement.</li><li><strong>Ask whether the terms are negotiable:</strong> you can request changes to severance pay, health coverage, references, or your separation date.</li><li><strong>Consider legal review:</strong> If you're unsure about the terms or the rights you're giving up, consider consulting an employment attorney before signing.</li></ul>`,
        sources: [
          {
            label:
              "California Labor Commissioner's Office — Final Pay and Severance Pay",
            url: 'https://www.dir.ca.gov/dlse/faq_waitingtimepenalty.htm',
          },
          {
            label: 'U.S. EEOC — Severance Agreements and Waivers of Claims',
            url: 'https://www.eeoc.gov/laws/guidance/qa-understanding-waivers-discrimination-claims-employee-severance-agreements',
          },
          {
            label: 'California Civil Rights Department',
            url: 'https://calcivilrights.ca.gov/',
          },
        ],
      },
      {
        id: 'unemployment',
        title: 'File for unemployment with the EDD',
        body: `<p>Apply for unemployment as soon as you become unemployed or your work hours are significantly reduced. Your claim generally starts on the Sunday of the week you file, so waiting may affect the weeks you can claim. You don't need to wait for severance or separation paperwork to apply.</p><ul><li><strong>Apply online:</strong> use <a href="https://edd.ca.gov/en/unemployment/" target="_blank" rel="noopener noreferrer">EDD's UI Online</a>.</li><li><strong>Gather your information:</strong> have your Social Security number, employer details, employment dates, and recent work and wage history ready.</li><li><strong>Certify for benefits:</strong> follow EDD's instructions and certify as directed, usually every two weeks, to continue receiving benefits.</li><li><strong>On WARN notice?</strong> Don't assume you must wait until the notice period ends. If you've stopped working or your hours have been reduced, check with EDD about your eligibility. If you're still working and receiving regular wages, you may not yet qualify. Answer EDD's questions about severance, WARN-related payments, or pay in lieu of notice accurately.</li></ul>`,
        sources: [
          {
            label: 'California EDD — Unemployment Benefits',
            url: 'https://edd.ca.gov/en/unemployment/',
          },
        ],
      },
    ],
  },
  {
    id: 'week',
    title: 'This week',
    items: [
      {
        id: 'health-insurance',
        title: 'Sort out health insurance',
        body: `<p>Find out exactly when your employer coverage ends, then compare your options so you don't have a gap.</p><ul><li><strong>COBRA</strong> keeps your current plan, but you pay the full premium. You generally have 60 days to elect it, and coverage can be backdated.</li><li><strong>Covered California</strong> offers plans, often with financial help. Losing job-based coverage opens a special enrollment window of about 60 days.</li><li><strong>Medi-Cal</strong> is free or low-cost coverage based on income, and you can apply at any time.</li></ul>`,
        sources: [
          {
            label: 'Covered California',
            url: 'https://www.coveredca.com/',
          },
        ],
      },
      {
        id: 'budget',
        title: 'Pause non-essential savings and review your budget',
        body: `<p>Your goal this week is to know roughly how long your money will last.</p><ul><li>List your must-pay bills: rent or mortgage, utilities, insurance, food, debt minimums.</li><li>Add up what you have: savings, severance, and expected unemployment payments.</li><li>Pause optional spending and extra savings contributions for now.</li><li>If a bill looks hard to pay, call your landlord or lender early. Many offer hardship options, and it's easier to ask before you miss a payment.</li></ul>`,
        sources: [
          {
            label: 'California Department of Financial Protection and Innovation',
            url: 'https://dfpi.ca.gov/',
          },
        ],
      },
      {
        id: 'calfresh-medi-cal',
        title: 'Check eligibility for CalFresh and Medi-Cal',
        body: `<p>A drop in income can make you eligible for food and health programs, even if you've never used them before.</p><ul><li><strong>CalFresh</strong> helps pay for groceries. Benefits are loaded onto an EBT card. If you have very little income or cash, you may qualify for faster processing.</li><li><strong>Medi-Cal</strong> covers health care based on your current income.</li><li>You can apply for both online. It's fine to apply and let the county decide.</li></ul>`,
        sources: [
          {
            label: 'BenefitsCal',
            url: 'https://benefitscal.com/',
          },
        ],
      },
    ],
  },
  {
    id: 'month',
    title: 'This month',
    items: [
      {
        id: 'notice-requirements',
        title: 'Understand notice requirements',
        body: `<p>Some employers must give 60 days' advance notice of a mass layoff or closure. If yours didn't, you may be owed back pay and benefits.</p><ul><li>Federal WARN generally applies to employers with 100 or more employees.</li><li>Cal-WARN generally applies to employers with 75 or more employees, and in some cases is broader than the federal law.</li><li>Not every layoff is covered. It depends on company size, how many people were let go, and whether it's a closure or relocation.</li><li>If you think notice was owed, talk to an employment attorney or the Labor Commissioner.</li></ul>`,
        sources: [
          {
            label: 'EDD: Layoff services and WARN',
            url: 'https://edd.ca.gov/en/jobs_and_training/Layoff_Services_WARN',
          },
        ],
      },
      {
        id: '401k',
        title: 'Decide what to do with your 401(k), if applicable',
        body: `<p>You usually have three choices, and there's rarely a same-day deadline.</p><ul><li><strong>Leave it</strong> in your old employer's plan, if the plan allows it. Small balances (generally under $7,000) may be moved out for you.</li><li><strong>Roll it over</strong> into an IRA or a new employer's plan. A direct rollover, where the money moves between institutions, avoids tax withholding.</li><li><strong>Cash it out.</strong> This is usually the costliest option: it's taxed as income, plus a 10% penalty if you're under 59½ (some exceptions apply).</li></ul><p>Compare fees and investment options before choosing.</p>`,
        sources: [
          {
            label: 'IRS: rollovers of retirement plans',
            url: 'https://www.irs.gov/retirement-plans',
          },
        ],
      },
    ],
  },
]

export const STORAGE_KEY = 'laid-off-ca:checked:v1'
