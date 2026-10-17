// Edit everything about you in this one file.
export const profile = {
  name: 'Yash Pardeshi',
  brand: 'YASH.',
  photo: '/yash.webp',
  roles: ['Finance & Treasury', 'Financial Modeling', 'Market Research'],
  headline: ['Numbers', 'That Drive', 'Decisions'],
  intro:
    'MBA Finance student turning cash flows, assumptions and market data into clear analysis that leadership can act on.',
  quote: ['Precision is my craft.', 'Value is my goal.'],
  resume: '/resume.pdf',
  email: 'yashpardeshi9823@gmail.com',
  phone: '+91 98232 94222',
  socials: {
    linkedin: 'https://www.linkedin.com/in/yash-pardeshi-a42ba0344',
  },
}

export const about = {
  heading: ["I don't just crunch numbers.", 'I model what comes next.'],
  text: [
    'I am an MBA Finance student at Universal AI University, Mumbai, with hands-on Finance & Treasury experience in project finance and financial modeling.',
    'At AdaniConnex I built an integrated model for hyperscale data center infrastructure, evaluating cash flows, capital and operating costs, financing assumptions and investment returns using NPV, WACC, PIRR, EIRR, EBITDA and terminal value.',
    'Before my MBA I spent over two years in data analysis and quality review, which taught me the analytical discipline and attention to detail I bring to every model.',
  ],
  stats: [
    { value: '2+', label: 'Years professional experience' },
    { value: '99%', label: 'Data accuracy at scale' },
    { value: 'CFO', label: 'Letter of recommendation' },
  ],
}

export const projects = [
  {
    category: 'Project finance / Infrastructure',
    title: 'Hyperscale Data Center Project Finance Model',
    org: 'AdaniConnex Private Limited',
    period: 'May 2026 - Jul 2026',
    description:
      'Integrated project finance model linking revenue assumptions, CAPEX, OPEX, financing, taxation and projected cash flows to evaluate project returns. Findings were presented to senior management and earned a Letter of Recommendation from the CFO.',
    tags: ['NPV', 'WACC', 'PIRR / EIRR', 'EBITDA', 'Terminal value'],
    metrics: [
      ['Sector', 'Data center infrastructure'],
      ['Model', 'Integrated project finance'],
      ['Inputs', 'Revenue, CAPEX, OPEX, financing, tax'],
      ['Outcome', 'CFO letter of recommendation'],
    ],
  },
  {
    category: 'Market research / Corporate live project',
    title: 'Retail Penetration Study, Haryana',
    org: 'Apar Industries Ltd. · Corporate Live Project (CMAPS)',
    period: 'Dec 2025 - Jan 2026',
    description:
      'Analyzed market and business data to assess retail penetration across Haryana. Ran competitive and channel-level analysis of demand, distribution gaps and market trends, and turned the findings into structured recommendations.',
    tags: ['Market research', 'Competitor analysis', 'Channel analysis'],
    metrics: [
      ['Client', 'Apar Industries Ltd.'],
      ['Region', 'Haryana'],
      ['Method', 'Competitive & channel-level analysis'],
      ['Output', 'Structured recommendations'],
    ],
  },
]

export const skills = [
  {
    group: 'Modeling & Valuation',
    items: ['Integrated financial modeling', 'DCF & terminal value', 'NPV & WACC', 'PIRR / EIRR', 'EBITDA analysis', 'Investment appraisal'],
  },
  {
    group: 'Research & Analysis',
    items: ['Industry & competitor research', 'Market analysis', 'Financial statement analysis', 'Revenue, CAPEX & OPEX', 'Sensitivity analysis'],
  },
  {
    group: 'Reporting & Tools',
    items: ['MS Excel', 'PowerPoint', 'Word', 'Data validation & QC', 'Documentation', 'Business communication'],
  },
]

export const experience = [
  {
    role: 'Finance & Treasury Intern',
    company: 'AdaniConnex Private Limited',
    period: 'May 2026 - Jul 2026',
    points: [
      'Developed an integrated project finance model for hyperscale data center infrastructure.',
      'Applied NPV, WACC, terminal value, PIRR, EIRR and EBITDA metrics to evaluate project returns.',
      'Reviewed operating and financing assumptions and their effect on cash flows and project performance.',
      'Presented structured financial analysis to senior management.',
    ],
  },
  {
    role: 'Editor Analyst',
    company: 'Real Team Systems Pvt. Ltd.',
    period: 'Mar 2023 - Jun 2025',
    points: [
      'Processed and reviewed structured and unstructured business data with 99% accuracy on tight deadlines.',
      'Performed data validation, quality-control reviews and discrepancy checks to keep reporting accurate.',
      'Prepared clear documentation while handling confidential information.',
    ],
  },
]

export const education = [
  { degree: 'MBA, Finance', school: 'Universal AI University, Mumbai', period: '2025 - 2027', score: 'Ongoing' },
  { degree: 'Global Management Program', school: 'University of Economics Varna, Bulgaria', period: 'International exposure', score: 'Completed' },
  { degree: 'B.Com', school: 'Deogiri College, Chh. Sambhajinagar', period: '2021 - 2024', score: 'CGPA 6.8' },
  { degree: 'Class XII', school: 'Higher Secondary', period: 'Board examination', score: '90.83%' },
  { degree: 'Class X', school: 'Secondary', period: 'Board examination', score: '73.20%' },
]

export const credentials = {
  certifications: [
    'Discounted Cash Flow (DCF) and Other Valuation Methodologies, New York Institute of Finance',
    'AI in Excel, Office Master',
    'AI Fluency, Microsoft',
    'MS-CIT',
    'Financial Analysis and Financial Modeling (in progress)',
  ],
  leadership: [
    'Vice President, Skill Development Community, Universal AI University',
    'Head, Rush 4 Rush annual fest',
    'Operations Head, Experiential Learning Corporation (ELC)',
  ],
}
