export type ChecklistItem = {
  id: string
  title: string
  body: string
  src: { label: string; url: string }
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
        title: 'Save your layoff letter or email',
        body: `<p>Your employer must generally provide immediate written notice when you're laid off or discharged, along with information about California's unemployment and other benefit programs.</p><ul><li>Save your layoff letter or HR email, including any details about your last day and reason for separation.</li><li>Check that you received the required Notice to Employee as to Change in Relationship and the EDD's For Your Benefit pamphlet (DE 2320). If you're unsure, ask HR.</li><li>Keep copies of your separation documents for your records. You can also request copies of your personnel and payroll records.</li></ul>`,
        src: {
          label: 'California EDD — Required Notices and Pamphlets',
          url: 'https://edd.ca.gov/en/payroll_taxes/step-7-provide-required-notices/',
        },
      },
      {
        id: 'final-paycheck',
        title: 'Get your final paycheck',
        body: `<p>In California, if you're laid off, your final wages are generally due immediately. That includes accrued, unused vacation or PTO.</p><ul><li>Check the amount against your hours, your PTO balance, and any commissions or expense reimbursements owed.</li><li>If it's late, employers can owe extra penalties of up to 30 days of wages.</li><li>If you're not paid correctly, you can file a wage claim with the Labor Commissioner.</li></ul>`,
        src: {
          label: "California Labor Commissioner's Office",
          url: 'https://www.dir.ca.gov/dlse/',
        },
      },
      {
        id: 'severance',
        title:
          'Review your severance offer, if applicable (before signing anything)',
        body: `<p>California doesn't require employers to offer severance unless a contract or company policy does. If you're offered some, you generally don't have to sign on the spot.</p><ul><li>Read what you'd be giving up. Severance agreements often include a release of legal claims.</li><li>Note the deadline. If you're 40 or older, you generally get at least 21 days to consider it (45 for group layoffs) and 7 days to change your mind after signing.</li><li>It's often worth asking for more: extra pay, continued health coverage, a neutral reference, or a later end date.</li><li>Consider having an employment attorney review it. Many offer a free first consultation.</li></ul>`,
        src: {
          label: 'California Civil Rights Department',
          url: 'https://calcivilrights.ca.gov/',
        },
      },
      {
        id: 'unemployment',
        title: 'File for unemployment with the EDD',
        body: `<p>File as soon as you're laid off. Your claim generally starts the week you file, so waiting can cost you benefits. You can file even if you're still waiting on severance or paperwork.</p><ul><li>Apply online through the EDD's UI Online.</li><li>Have your Social Security number, your employer's name and address, and your dates of employment ready.</li><li>After you file, you'll need to certify for benefits every two weeks to keep getting paid.</li></ul>`,
        src: {
          label: 'EDD: file for unemployment',
          url: 'https://edd.ca.gov/en/unemployment/',
        },
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
        src: {
          label: 'Covered California',
          url: 'https://www.coveredca.com/',
        },
      },
      {
        id: 'budget',
        title: 'Pause non-essential savings and review your budget',
        body: `<p>Your goal this week is to know roughly how long your money will last.</p><ul><li>List your must-pay bills: rent or mortgage, utilities, insurance, food, debt minimums.</li><li>Add up what you have: savings, severance, and expected unemployment payments.</li><li>Pause optional spending and extra savings contributions for now.</li><li>If a bill looks hard to pay, call your landlord or lender early. Many offer hardship options, and it's easier to ask before you miss a payment.</li></ul>`,
        src: {
          label: 'California Department of Financial Protection and Innovation',
          url: 'https://dfpi.ca.gov/',
        },
      },
      {
        id: 'calfresh-medi-cal',
        title: 'Check eligibility for CalFresh and Medi-Cal',
        body: `<p>A drop in income can make you eligible for food and health programs, even if you've never used them before.</p><ul><li><strong>CalFresh</strong> helps pay for groceries. Benefits are loaded onto an EBT card. If you have very little income or cash, you may qualify for faster processing.</li><li><strong>Medi-Cal</strong> covers health care based on your current income.</li><li>You can apply for both online. It's fine to apply and let the county decide.</li></ul>`,
        src: {
          label: 'BenefitsCal',
          url: 'https://benefitscal.com/',
        },
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
        src: {
          label: 'EDD: Layoff services and WARN',
          url: 'https://edd.ca.gov/en/jobs_and_training/Layoff_Services_WARN',
        },
      },
      {
        id: '401k',
        title: 'Decide what to do with your 401(k), if applicable',
        body: `<p>You usually have three choices, and there's rarely a same-day deadline.</p><ul><li><strong>Leave it</strong> in your old employer's plan, if the plan allows it. Small balances (generally under $7,000) may be moved out for you.</li><li><strong>Roll it over</strong> into an IRA or a new employer's plan. A direct rollover, where the money moves between institutions, avoids tax withholding.</li><li><strong>Cash it out.</strong> This is usually the costliest option: it's taxed as income, plus a 10% penalty if you're under 59½ (some exceptions apply).</li></ul><p>Compare fees and investment options before choosing.</p>`,
        src: {
          label: 'IRS: rollovers of retirement plans',
          url: 'https://www.irs.gov/retirement-plans',
        },
      },
    ],
  },
]

export const STORAGE_KEY = 'laid-off-ca:checked:v1'
