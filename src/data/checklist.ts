export type SourceLink = {
  label: string
  url: string
}

export type ChecklistItem = {
  id: string
  title: string
  body: string
  sources: SourceLink[]
  /** Optional personal note shown at the bottom of the expanded panel. */
  note?: string
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
        title: 'Save your separation documents and work records',
        body: `<p>Keep copies of important employment documents for your records, ideally before you lose access to company systems.</p><ul><li><strong>Save your layoff letter or HR email:</strong> Keep details about your separation date and reason for separation.</li><li><strong>Download your employment records:</strong> Save pay stubs, performance reviews, benefits information, and your offer letter. You can also request copies of your personnel and payroll records.</li><li><strong>Keep everything somewhere accessible:</strong> Store copies securely in a personal account, and only retain company information you're authorized to keep.</li></ul>`,
        sources: [
          {
            label: 'California EDD — Required Notices and Pamphlets',
            url: 'https://edd.ca.gov/en/payroll_taxes/step-7-provide-required-notices/',
          },
          {
            label:
              "California Labor Commissioner's Office — Personnel Files",
            url: 'https://www.dir.ca.gov/dlse/faq_righttoinspectpersonnelfiles.htm',
          },
        ],
        note: 'I still had access to my company email the day of layoffs, so I emailed a copy of the layoff letter to my personal email asap. I was sent an official separation packet to my personal email later as well.',
      },
      {
        id: 'final-paycheck',
        title: 'Check your final paycheck',
        body: `<p>In California, final wages are generally due immediately when you're laid off or discharged. If you're on WARN notice, your final-paycheck deadline generally depends on when your employment actually ends, not when you receive the notice.</p><ul><li><strong>Confirm your separation date:</strong> If you're still employed during the WARN period, regular pay generally continues on your normal payday. Check your official separation date with HR.</li><li><strong>Check your final pay:</strong> Verify wages owed, earned commissions, and unused vacation/PTO. Unused sick leave generally doesn't have to be paid out.</li><li><strong>Know what you're owed:</strong> WARN-related pay, severance, and final wages may be treated differently. Check your separation documents to understand what each payment covers.</li><li><strong>Follow up if anything is missing:</strong> If final wages are late or incorrect, contact the California Labor Commissioner's Office. A waiting-time penalty of up to 30 days' wages may apply if the legal requirements are met.</li></ul>`,
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
        note: 'My separation packet contained all the details regarding final paychecks. I also reached out to HR for more info regarding how WARN notices work.',
      },
      {
        id: 'severance',
        title:
          'Review your severance offer, if you have one',
        body: `<p>California generally does not require employers to offer severance unless a contract or company policy provides for it. If you receive an offer, read it carefully before signing; you can ask for time to review it.</p><ul><li><strong>Understand what you're giving up:</strong> Severance agreements often require you to release certain legal claims.</li><li><strong>Check your deadline:</strong> If you're 40 or older, a waiver of federal age-discrimination claims generally requires at least 21 days to consider the agreement—or 45 days for certain group termination programs—and 7 days after signing to revoke it. These rules don't apply to every severance agreement.</li><li><strong>Ask whether the terms are negotiable:</strong> You can request changes to severance pay, health coverage, references, or your separation date.</li><li><strong>Consider legal review:</strong> If you're unsure about the terms or the rights you're giving up, consider consulting an employment attorney before signing.</li></ul>`,
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
        note: 'My severance was not negotiable, but in some cases, it can be. Check your terms carefully before signing anything!',
      },
      {
        id: 'unemployment',
        title: 'File for unemployment with the EDD',
        body: `<p>Apply for unemployment as soon as you become unemployed or your work hours are significantly reduced. Your claim generally starts on the Sunday of the week you file, so waiting may affect the weeks you can claim. You don't need to wait for severance or separation paperwork to apply.</p><ul><li><strong>Apply online:</strong> Use <a href="https://edd.ca.gov/en/unemployment/" target="_blank" rel="noopener noreferrer">EDD's UI Online</a>.</li><li><strong>Gather your information:</strong> Have your Social Security number, employer details, employment dates, and recent work and wage history ready.</li><li><strong>Certify for benefits:</strong> Follow EDD's instructions and certify as directed, usually every two weeks, to continue receiving benefits.</li><li><strong>On WARN notice?</strong> Don't assume you must wait until the notice period ends. If you've stopped working or your hours have been reduced, check with EDD about your eligibility. If you're still working and receiving regular wages, you may not yet qualify. Answer EDD's questions about severance, WARN-related payments, or pay in lieu of notice accurately.</li></ul>`,
        sources: [
          {
            label: 'EDD — Apply for Unemployment',
            url: 'https://edd.ca.gov/en/unemployment/step-2-apply/',
          },
          {
            label: 'EDD — Certification and Benefits',
            url: 'https://edd.ca.gov/en/unemployment/step-5-certify-for-benefits/',
          },
          {
            label: 'EDD — WARN Pay and Unemployment Eligibility',
            url: 'https://edd.ca.gov/en/uibdg/total_and_partial_unemployment_tpu_46037/',
          },
        ],
        note: 'Even though I received a WARN Act notice, I filed for unemployment as soon as I physically stopped performing work (so, the day I was laid off). In all the EDD certifications, I am reporting my pay as "other income" each week under "WARN pay".',
      },
      {
        id: 'immigration',
        title: 'Check your immigration options, if applicable',
        body: `<p>If your work authorization or immigration status depends on your job, act promptly after a layoff. Your options and deadlines depend on your specific status.</p><ul><li><strong>Check your deadline:</strong> Certain visa holders, including H-1B workers, may qualify for a discretionary grace period of up to 60 days after employment ends, or until their authorized validity period expires, whichever comes first.</li><li><strong>Explore your options:</strong> You may be able to find a new sponsoring employer, change immigration status, or pursue another eligible pathway.</li><li><strong>Get qualified guidance:</strong> Contact your immigration attorney or your employer's immigration counsel as soon as possible. Don't assume the same rules apply to every visa type.</li></ul>`,
        sources: [
          {
            label:
              'USCIS — Options for Nonimmigrant Workers Following Termination of Employment',
            url: 'https://www.uscis.gov/working-in-the-united-states/information-for-employers-and-employees/options-for-nonimmigrant-workers-following-termination-of-employment',
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
        title: 'Secure your health insurance and use your benefits',
        body: `<p>Find out exactly when your employer-sponsored coverage ends, then compare options to avoid a coverage gap.</p><ul><li><strong>Use your current benefits:</strong> Schedule any needed medical, dental, vision, or specialist appointments before your coverage ends. Refill eligible prescriptions and ask your providers about upcoming treatments.</li><li><strong>Compare COBRA:</strong> You may be able to keep your current plan, but you'll generally pay the full premium. You usually have at least 60 days to elect it, measured from the later of the coverage-loss date or the date you're provided the election notice. Coverage can be retroactive if you elect and pay within the required deadlines.</li><li><strong>Explore Covered California:</strong> Losing job-based coverage generally gives you a special enrollment period of 60 days before or after your coverage ends. Financial assistance may be available.</li><li><strong>Check Medi-Cal eligibility:</strong> Medi-Cal provides free or low-cost coverage for eligible people based on factors including income and household circumstances. You can apply year-round.</li></ul>`,
        sources: [
          {
            label: 'California Department of Insurance — Losing Employer Coverage',
            url: 'https://www.insurance.ca.gov/01-consumers/110-health/40-lost/',
          },
          {
            label: 'Covered California — Special Enrollment',
            url: 'https://www.coveredca.com/support/before-you-buy/qualifying-life-events/',
          },
          {
            label: 'CMS — COBRA Questions and Answers',
            url: 'https://www.cms.gov/cciio/programs-and-initiatives/other-insurance-protections/cobra_qna',
          },
        ],
        note: 'Book all those medical/dental/vision appointments asap if you have time before your coverage ends! The next available appointment with your PCP may be weeks out.',
      },
      {
        id: 'budget',
        title: 'Review your budget and pause non-essential spending',
        body: `<p>Your goal this week is to understand how long your money can cover essential expenses.</p><ul><li><strong>Add up essential expenses:</strong> Include rent or mortgage, utilities, insurance, groceries, transportation, and minimum debt payments.</li><li><strong>Estimate available funds:</strong> Include savings and any confirmed severance or unemployment benefits. Treat pending payments as estimates, not guaranteed income.</li><li><strong>Pause non-essential spending:</strong> Consider temporarily reducing subscriptions, discretionary purchases, and extra savings or investment contributions while you assess your finances.</li><li><strong>Contact creditors early:</strong> If you may miss a payment, contact your landlord, lender, or utility provider to ask about payment plans, hardship programs, or extensions. Options vary by provider.</li></ul>`,
        sources: [
          {
            label: 'California DFPI — Consumer Help and Financial Resources',
            url: 'https://dfpi.ca.gov/consumers/how-to-get-help/',
          },
          {
            label: 'California EDD — Unemployment Benefits',
            url: 'https://edd.ca.gov/en/unemployment/',
          },
        ],
      },
      {
        id: 'calfresh-medi-cal',
        title: 'Check eligibility for CalFresh and Medi-Cal',
        body: `<p>A drop in income may make you eligible for food and health assistance, even if you haven't used these programs before.</p><ul><li><strong>CalFresh:</strong> Helps eligible households pay for groceries through an EBT card. If you have very limited income and resources, you may qualify for expedited benefits within three calendar days.</li><li><strong>Medi-Cal:</strong> Provides free or low-cost health coverage for eligible Californians. Eligibility depends on factors including income, household size, and other applicable circumstances.</li><li><strong>Apply online:</strong> You can apply for both programs through BenefitsCal. Applying doesn't guarantee eligibility; your county will review your application.</li></ul>`,
        sources: [
          {
            label: 'BenefitsCal',
            url: 'https://benefitscal.com/',
          },
          {
            label: 'California Department of Social Services — CalFresh',
            url: 'https://www.cdss.ca.gov/calfresh',
          },
          {
            label: 'California DHCS — Medi-Cal Eligibility',
            url: 'https://www.dhcs.ca.gov/medi-cal-eligibility/',
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
        id: '401k',
        title: 'Review your 401(k) options',
        body: `<p>You generally have time to decide what to do with your retirement savings after leaving a job. Check your plan's rules before making changes.</p><ul><li><strong>Leave it in your former employer's plan:</strong> This may be an option depending on your account balance and plan rules. Smaller balances may be moved or distributed under certain circumstances.</li><li><strong>Roll it over:</strong> You may be able to transfer your savings to an IRA or a new employer's eligible retirement plan. A direct rollover generally avoids mandatory federal income-tax withholding on the transfer.</li><li><strong>Avoid cashing out without understanding the costs:</strong> Withdrawals may be subject to income tax and, if you're under 59½, an additional 10% federal tax unless an exception applies.</li></ul><p>Compare fees, investment options, and tax consequences before deciding. You can contact your plan administrator to understand your options.</p>`,
        sources: [
          {
            label: 'IRS — Retirement Plan Options After Leaving a Job',
            url: 'https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-termination-of-employment',
          },
        ],
      },
    ],
  },
]

export const STORAGE_KEY = 'laid-off-ca:checked:v1'
