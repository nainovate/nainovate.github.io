// ===== Case Study Detail Page JavaScript =====

// ===== Complete Case Studies Data Store =====

const caseStudiesData = {
    'vitals': {
        id: 'vitals',
        title: 'Digitizing Human Vitals Data',
        subtitle: 'for Medical Device Company',
        image: 'assets/images/case-studies/Digitizing Human Vitals Data.png',
        description: 'Digitize human vitals for a medical device company, improving accuracy, automation, sharing, and analytics.',
        client: 'Leading Medical Device Company',
        industry: 'Healthcare',
        industryColor: 'green',
        problem: {
            intro: 'A leading medical device company specializes in producing various health monitoring devices, such as blood pressure monitors, glucose meters, and heart rate monitors. These devices are widely used by patients to manage chronic conditions and maintain overall health. However, the process of manually recording, tracking, and sharing vitals data is cumbersome and prone to errors.',
            points: [
                'Improve data accuracy and reliability',
                'Enhance user experience by automating data collection',
                'Facilitate seamless sharing of data with healthcare providers',
                'Enable advanced data analytics for better health insights'
            ]
        },
        solution: {
            intro: 'To address these challenges, the medical device company decided to develop a comprehensive digital platform to automatically collect, store, and manage vitals data from their devices. The solution comprises the following components:',
            components: [
                {
                    title: 'Device Integration',
                    description: 'Upgrade existing devices with Bluetooth or Wi-Fi connectivity to transmit data to the digital platform.',
                    icon: 'device',
                    color: 'primary'
                },
                {
                    title: 'Mobile Application',
                    description: 'Develop a user-friendly mobile application that syncs with the devices, allowing users to view their vitals data in real-time.',
                    icon: 'mobile',
                    color: 'blue'
                },
                {
                    title: 'Cloud Infrastructure',
                    description: 'Implement a secure cloud-based storage system to aggregate and store all vitals data, ensuring data privacy and compliance with healthcare regulations (e.g., HIPAA).',
                    icon: 'cloud',
                    color: 'purple'
                },
                {
                    title: 'Analytics Dashboard',
                    description: 'Create an analytics dashboard for users and healthcare providers to monitor trends, set alerts for abnormal readings, and generate reports.',
                    icon: 'chart',
                    color: 'green'
                },
                {
                    title: 'API for Integration',
                    description: 'Develop APIs to enable seamless integration with electronic health records (EHR) systems and other third-party health applications.',
                    icon: 'api',
                    color: 'orange'
                }
            ]
        },
        metrics: [
            { value: 70, label: 'User Adoption Rate', description: 'Active daily users' },
            { value: 90, label: 'Data Accuracy', description: 'Error-free readings' },
            { value: 80, label: 'User Engagement', description: 'Weekly active users' },
            { value: 50, label: 'Healthcare Integration', description: 'Provider adoption' },
            { value: 75, label: 'Operational Efficiency', description: 'Time saved' }
        ],
        technologies: ['IoT Sensors', 'Cloud Computing (AWS)', 'React Native', 'Python/Django', 'PostgreSQL', 'REST APIs', 'HIPAA Compliance', 'Data Analytics'],
        conclusion: 'By implementing this digital platform, the medical device company not only enhances the user experience and data accuracy but also positions itself as a leader in the health technology space, capable of providing valuable insights and integration with broader healthcare ecosystems.',
        achievements: [
            'Successfully digitized vital signs monitoring for thousands of users',
            'Improved patient outcomes through real-time health monitoring',
            'Established a scalable platform for future healthcare innovations'
        ]
    },
    
    'tax': {
        id: 'tax',
        title: 'Digitizing Tax Filing Processes',
        subtitle: 'for Enhanced Compliance in India',
        image: 'assets/images/case-studies/Digitizing Tax Filing Processes.png',
        description: 'Enhance tax compliance in India by digitizing tax filing processes, overcoming inefficiencies and errors in paper-based methods.',
        client: 'Tax Filing Company',
        industry: 'Finance',
        industryColor: 'blue',
        problem: {
            intro: 'A tax filing company in India faced significant challenges in managing and processing tax compliance for both enterprises and individuals. The traditional methods of handling paper documents were inefficient, prone to errors, and time-consuming.',
            points: [
                'Delayed Processing: Manual handling of tax documents resulted in slow processing times, often missing important deadlines',
                'Data Inaccuracy: High rates of human error during data entry, leading to inaccuracies in tax filings and potential noncompliance penalties',
                'Storage and Retrieval Issues: Physical storage of documents required significant space and made document retrieval cumbersome',
                'Lack of Transparency: Clients had limited visibility into the status of their tax filings, causing anxiety and frequent follow-ups',
                'Resource Intensive: The process required substantial human resources, leading to increased operational costs'
            ]
        },
        solution: {
            intro: 'To address these challenges, the tax filing company implemented a comprehensive digitization strategy, which included:',
            components: [
                {
                    title: 'Document Digitization',
                    description: 'Scanning and converting physical tax documents into digital formats, ensuring easy storage, retrieval, and sharing.',
                    icon: 'document',
                    color: 'blue'
                },
                {
                    title: 'Workflow Automation',
                    description: 'Developing a robust digital workflow system that automated key processes, such as data extraction, verification, and submission.',
                    icon: 'workflow',
                    color: 'purple'
                },
                {
                    title: 'Cloud-Based Storage',
                    description: 'Utilizing secure cloud storage solutions for managing and storing digital documents, enabling quick access and disaster recovery.',
                    icon: 'cloud',
                    color: 'primary'
                },
                {
                    title: 'Client Portal',
                    description: 'Creating an online portal where clients could upload documents, track the status of their filings, and receive updates in real-time.',
                    icon: 'portal',
                    color: 'green'
                },
                {
                    title: 'Integration with Government Systems',
                    description: 'Integrating the workflow system with government tax portals to streamline submissions and receive instant acknowledgments and feedback.',
                    icon: 'api',
                    color: 'orange'
                }
            ]
        },
        metrics: [
            { value: 60, label: 'Processing Time Reduction', description: 'Faster processing' },
            { value: 95, label: 'Error Reduction', description: 'Accuracy improvement' },
            { value: 90, label: 'Storage Efficiency', description: 'Space saved' },
            { value: 45, label: 'Client Satisfaction', description: 'Increased satisfaction' },
            { value: 35, label: 'Cost Savings', description: 'Operational savings' },
            { value: 99, label: 'Compliance Rate', description: 'Regulatory compliance' }
        ],
        technologies: ['Document Scanning', 'OCR Technology', 'Cloud Storage', 'Workflow Automation', 'API Integration', 'Government Portal Integration', 'Security Protocols', 'Real-time Updates'],
        conclusion: 'The digitization and automation of the tax filing process transformed the company\'s operations, leading to faster, more accurate, and cost-effective services. This strategic shift not only enhanced client satisfaction but also positioned the company as a leader in leveraging technology for tax compliance in India.',
        achievements: [
            'Achieved 99% compliance rate with regulatory requirements',
            'Reduced processing time by 60% while maintaining accuracy',
            'Established a scalable digital infrastructure for future growth'
        ]
    },
    
    'documents': {
        id: 'documents',
        title: 'Digitizing Document Management',
        subtitle: 'in a Top Indian Educational Institution',
        image: 'assets/images/case-studies/Digitizing Document Management.png',
        description: 'Revolutionizing Document Management for Enhanced Efficiency and Security.',
        client: 'Leading Educational Institution',
        industry: 'Education',
        industryColor: 'purple',
        problem: {
            intro: 'A leading educational institution in India faced challenges with their document management system.',
            points: [
                'Inefficient Document Handling: Manual processes caused delays and errors',
                'Storage Issues: Limited physical space and disorganized archives',
                'Accessibility: Time-consuming document retrieval',
                'Security: Risk of unauthorized access and data loss',
                'Compliance: Difficulties meeting regulatory and audit requirements'
            ]
        },
        solution: {
            intro: 'To address these challenges, the institution decided to implement an Electronic Document Management System (EDMS). The following steps were taken:',
            components: [
                {
                    title: 'Needs Assessment',
                    description: 'Conducted a thorough analysis of the institution\'s document management requirements and workflow processes.',
                    icon: 'assessment',
                    color: 'purple'
                },
                {
                    title: 'Selection of EDMS',
                    description: 'Chose an EDMS that offered robust features such as document capture, indexing, storage, retrieval, version control, and security.',
                    icon: 'system',
                    color: 'blue'
                },
                {
                    title: 'Data Migration',
                    description: 'Transferred existing digital documents into the new EDMS, ensuring accurate metadata tagging for easy retrieval.',
                    icon: 'migration',
                    color: 'green'
                },
                {
                    title: 'Security Measures',
                    description: 'Implemented advanced security protocols to protect sensitive information, including user access controls, encryption, and audit trails.',
                    icon: 'security',
                    color: 'red'
                },
                {
                    title: 'Training and Support',
                    description: 'Provided comprehensive training for faculty, administrative staff, and IT personnel. Established a support system for ongoing assistance.',
                    icon: 'training',
                    color: 'orange'
                }
            ]
        },
        metrics: [
            { value: 50, label: 'Efficiency', description: 'Process improvement' },
            { value: 70, label: 'Cost Savings', description: 'Operational savings' },
            { value: 90, label: 'User Adoption', description: 'Staff adoption rate' },
            { value: 80, label: 'Environmental Impact', description: 'Paper reduction' }
        ],
        technologies: ['EDMS Software', 'Document Scanning', 'OCR Technology', 'Metadata Management', 'Encryption', 'Access Controls', 'Cloud Storage', 'Audit Trails'],
        conclusion: 'The EDMS implementation significantly enhanced document management, improving efficiency, cost savings, and security. This digital transformation supports the institution\'s operational capabilities and regulatory compliance, demonstrating the value of modernizing document workflows.',
        achievements: [
            'Successfully digitized and organized years of institutional documents',
            'Achieved 90% user adoption rate across all departments',
            'Reduced paper usage by 80%, supporting environmental sustainability'
        ]
    },
    
    'workforce': {
        id: 'workforce',
        title: 'Enhancing Workforce Management',
        subtitle: '',
        image: 'assets/images/case-studies/Enhancing Workforce Management.png',
        description: 'Enhance workforce management by improving accuracy, efficiency, and insights into work hours and productivity.',
        client: 'Enterprise Organization',
        industry: 'HR Tech',
        industryColor: 'orange',
        problem: {
            intro: 'Managing and tracking work hours for employees has always been a challenge for organizations. Traditional methods of logging work hours often result in inaccuracies, inefficiencies, and lack of detailed insights into individual productivity.',
            points: [
                'Inaccurate Work Hour Tracking: Difficulty in maintaining precise records of daily work hours, leading to discrepancies in billing and payroll',
                'Lack of Insight into Rework Hours: Inability to separately log and analyze rework hours, making it hard to identify inefficiencies',
                'Training Hours Management: Challenges in recording and monitoring time spent on training and professional development',
                'Task-Specific Time Tracking: Difficulty in logging and managing time spent on specific tasks or projects, impacting project management and resource allocation',
                'Assessment of Work Outcomes: Lack of detailed insights into individual work outcomes based on logged hours, hindering productivity evaluations and performance improvements'
            ]
        },
        solution: {
            intro: 'Develop a digital platform to streamline workforce management, including logging daily work hours, tracking rework hours, recording training hours, logging task-specific time, and generating individual work outcome reports for improved productivity and decision-making.',
            components: [
                {
                    title: 'Daily Work Hours Logging',
                    description: 'A user-friendly interface allows employees to log their daily work hours, including start and end times, breaks, and total hours. Managers can review and approve logged hours.',
                    icon: 'clock',
                    color: 'blue'
                },
                {
                    title: 'Rework Hours Logging',
                    description: 'Separate logging for rework hours enables employees to record time spent on redoing tasks. Managers can analyze rework hours to identify inefficiencies.',
                    icon: 'refresh',
                    color: 'orange'
                },
                {
                    title: 'Training Hours Logging',
                    description: 'Employees can log hours spent on training and professional development activities. The system tracks various types of training sessions.',
                    icon: 'training',
                    color: 'green'
                },
                {
                    title: 'Task-Specific Time Logging',
                    description: 'Detailed logging for specific tasks or projects provides insights into the time spent on each activity, aiding in precise billing and better project management.',
                    icon: 'tasks',
                    color: 'purple'
                },
                {
                    title: 'Individual Work Outcome Reporting',
                    description: 'Comprehensive reports on individual work outcomes are generated based on logged hours, helping managers evaluate productivity and performance.',
                    icon: 'report',
                    color: 'primary'
                }
            ]
        },
        metrics: [
            { value: 95, label: 'Accuracy in Work Hour Tracking', description: 'Precise time records' },
            { value: 85, label: 'Identification of Inefficiencies', description: 'Process improvements' },
            { value: 75, label: 'Effective Training Management', description: 'Training tracking' },
            { value: 90, label: 'Improved Project Management', description: 'Project efficiency' },
            { value: 80, label: 'Enhanced Productivity', description: 'Performance evaluation' }
        ],
        technologies: ['Web Application', 'Mobile App', 'Time Tracking APIs', 'Analytics Dashboard', 'Report Generation', 'Cloud Database', 'Real-time Sync', 'Manager Portal'],
        conclusion: 'By implementing this Enhancing Workforce Management solution, we have successfully addressed the challenges associated with work hour tracking and management. The application improved accuracy in billing and payroll, identified inefficiencies, and facilitated better resource management. The detailed insights into individual work outcomes enabled data-driven decisions, enhancing overall productivity and performance.',
        achievements: [
            'Achieved 95% accuracy in work hour tracking across the organization',
            'Reduced payroll discrepancies and improved billing accuracy',
            'Enabled data-driven workforce optimization decisions'
        ]
    },
    
    'catalog': {
        id: 'catalog',
        title: 'Streamlining Product Catalogue Management',
        subtitle: '',
        image: 'assets/images/case-studies/Product Catalogue Management.png',
        description: 'Enhancing Efficiency and Customer Engagement through Accurate and Organized Product Data.',
        client: 'E-commerce Company',
        industry: 'Retail',
        industryColor: 'green',
        problem: {
            intro: 'Businesses often face significant challenges in managing their product catalogues effectively.',
            points: [
                'Data Inconsistency: Maintaining accurate and consistent product information across multiple platforms is complex and prone to errors',
                'Customer Experience: Outdated or inconsistent product information leads to a poor customer experience, reducing engagement and resulting in lost sales opportunities',
                'Manual Updates: The process of manually updating catalogues is labor-intensive and error-prone, consuming considerable time and resources',
                'Platform Diversity: Managing product catalogues across various platforms, both online and offline, requires different formats and presentation styles, complicating the management process',
                'Operational Inefficiency: Fragmented and disorganized data makes it difficult for staff to retrieve and utilize product information efficiently, affecting overall productivity and inventory management'
            ]
        },
        solution: {
            intro: 'To address these challenges, we offer comprehensive catalogue management services designed to streamline and enhance the management of product information. Our services encompass:',
            components: [
                {
                    title: 'Catalogue Updating and Maintenance',
                    description: 'Regularly update and maintain key product information to ensure accuracy and relevance. Prevent pitfalls of outdated information.',
                    icon: 'update',
                    color: 'green'
                },
                {
                    title: 'Conversion Services',
                    description: 'Convert product data into various formats suitable for different platforms. Ensure product information is accessible across all necessary platforms.',
                    icon: 'convert',
                    color: 'blue'
                },
                {
                    title: 'Data Indexing',
                    description: 'Employ systematic data indexing to enhance the organization and retrieval of product information. Structure data in a logical and searchable manner.',
                    icon: 'index',
                    color: 'purple'
                }
            ]
        },
        metrics: [
            { value: 95, label: 'Data Accuracy', description: 'Product info accuracy' },
            { value: 70, label: 'Customer Engagement', description: 'Increased engagement' },
            { value: 60, label: 'Operational Efficiency', description: 'Process improvement' },
            { value: 50, label: 'Sales Growth', description: 'Revenue increase' }
        ],
        technologies: ['Product Information Management (PIM)', 'Data Conversion Tools', 'API Integration', 'Multi-platform Support', 'Automated Updates', 'Search Indexing', 'Version Control', 'Analytics'],
        conclusion: 'Our catalogue management services ensure that businesses maintain accurate, organized, and visually appealing product information. By leveraging our expertise in updating, converting, and indexing product data, businesses can enhance customer engagement, streamline operations, and boost sales. This holistic approach to catalogue management not only resolves the challenges of manual updates and data inconsistencies but also provides a scalable solution for both online and offline product information management.',
        achievements: [
            'Achieved 95% data accuracy across all product catalogues',
            'Increased customer engagement by 70% through improved product information',
            'Delivered 50% sales growth through better product discovery'
        ]
    },
    
    'logistics': {
        id: 'logistics',
        title: 'Optimizing Logistics Management',
        subtitle: '',
        image: 'assets/images/case-studies/Optimizing Logistics Management.png',
        description: 'Developed intelligent routing system with predictive analytics to optimize delivery routes and reduce operational costs.',
        client: 'Major Logistics Provider',
        industry: 'Logistics',
        industryColor: 'blue',
        problem: {
            intro: 'The logistics company faced challenges in managing their delivery operations efficiently, resulting in increased costs and delayed deliveries.',
            points: [
                'Inefficient route planning leading to longer delivery times',
                'High fuel costs due to suboptimal routing',
                'Lack of real-time visibility into delivery status',
                'Difficulty in predicting and preventing delays',
                'Manual processes causing errors and inefficiencies'
            ]
        },
        solution: {
            intro: 'We developed a comprehensive logistics optimization platform using AI and predictive analytics:',
            components: [
                {
                    title: 'Intelligent Route Optimization',
                    description: 'AI-powered algorithm to calculate the most efficient delivery routes based on traffic, distance, and delivery priorities.',
                    icon: 'route',
                    color: 'blue'
                },
                {
                    title: 'Real-time Tracking',
                    description: 'GPS-enabled tracking system providing real-time visibility of all deliveries and vehicles.',
                    icon: 'tracking',
                    color: 'green'
                },
                {
                    title: 'Predictive Analytics',
                    description: 'Machine learning models to predict potential delays and optimize delivery schedules proactively.',
                    icon: 'analytics',
                    color: 'purple'
                },
                {
                    title: 'Mobile Driver App',
                    description: 'User-friendly mobile application for drivers with turn-by-turn navigation and delivery management.',
                    icon: 'mobile',
                    color: 'orange'
                },
                {
                    title: 'Customer Portal',
                    description: 'Self-service portal for customers to track deliveries and receive real-time updates.',
                    icon: 'portal',
                    color: 'primary'
                }
            ]
        },
        metrics: [
            { value: 40, label: 'Faster Delivery', description: 'Reduced delivery time' },
            { value: 30, label: 'Cost Reduction', description: 'Operational savings' },
            { value: 95, label: 'On-time Rate', description: 'Delivery reliability' },
            { value: 85, label: 'Customer Satisfaction', description: 'Improved service' }
        ],
        technologies: ['AI Route Optimization', 'GPS Tracking', 'Machine Learning', 'Predictive Analytics', 'Mobile Apps', 'Real-time APIs', 'Cloud Platform', 'IoT Sensors'],
        conclusion: 'The implementation of our intelligent logistics management system transformed the company\'s operations, resulting in significant cost savings and improved customer satisfaction. The predictive analytics capability has enabled proactive decision-making, while real-time tracking has enhanced transparency throughout the delivery process.',
        achievements: [
            'Reduced delivery times by 40% through intelligent routing',
            'Achieved 30% reduction in operational costs',
            'Improved on-time delivery rate to 95%'
        ]
    },
    
    'recruitment': {
        id: 'recruitment',
        title: 'Enhancing Recruitment Efficiency',
        subtitle: 'with Generative AI',
        image: 'assets/images/case-studies/Enhancing Recruitment Efficiency.png',
        description: 'Transforming Talent Acquisition: Boosting Efficiency with Generative AI in Recruitment.',
        client: 'HR Technology Company',
        industry: 'HR Tech',
        industryColor: 'purple',
        problem: {
            intro: 'Recruitment processes often involve sifting through numerous resumes to identify candidates with the right skills and qualifications. This manual task is time-consuming and prone to human error, leading to inefficiencies and potential oversights. Recruiters struggle to quickly answer specific queries such as identifying the skills of a particular candidate or finding candidates who best fit a given job description. This can result in delayed hiring decisions, increased workload for HR teams, and missed opportunities to hire the best talent promptly.',
            points: []
        },
        solution: {
            intro: 'Implementing a Generative AI-powered resume screening tool can revolutionize the recruitment process. This advanced tool can automatically parse and analyze resumes, extracting key information such as skills, experience, and qualifications. Leveraging state-of-the-art natural language processing (NLP) and machine learning algorithms, the Generative AI tool can:',
            components: [
                {
                    title: 'Match Candidates to Job Descriptions',
                    description: 'Accurately match candidates to job descriptions by understanding the nuances of both resumes and job requirements.',
                    icon: 'match',
                    color: 'purple'
                },
                {
                    title: 'Rank Candidates',
                    description: 'Rank candidates based on their suitability for a given role, providing a prioritized list for recruiters.',
                    icon: 'rank',
                    color: 'blue'
                },
                {
                    title: 'Answer Specific Queries',
                    description: 'Instantly respond to recruiters\' queries about candidate skills and qualifications, reducing the need for manual searching.',
                    icon: 'query',
                    color: 'green'
                },
                {
                    title: 'Continuous Learning',
                    description: 'Improve matching accuracy over time by learning from recruiter feedback and evolving job market trends.',
                    icon: 'learning',
                    color: 'orange'
                }
            ]
        },
        metrics: [
            { value: 30, label: 'Time-to-Hire', description: 'Faster hiring' },
            { value: 50, label: 'Screening Efficiency', description: 'Process improvement' },
            { value: 90, label: 'Candidate Matching', description: 'Accuracy rate' },
            { value: 95, label: 'Recruiter Satisfaction', description: 'User satisfaction' }
        ],
        technologies: ['Generative AI', 'NLP', 'Machine Learning', 'Resume Parsing', 'Semantic Analysis', 'Cloud AI Platform', 'REST APIs', 'Real-time Processing'],
        conclusion: 'Adopting a Generative AI-powered resume screening tool addresses the inefficiencies and errors in manual resume processing. By automating candidate information extraction and analysis, recruiters can quickly identify suitable candidates, leading to faster hiring decisions, reduced workload, and improved talent acquisition. This technological solution not only enhances candidate matching accuracy but also contributes to significant time and cost savings in the recruitment process.',
        achievements: [
            'Reduced time-to-hire by 30% through automated screening',
            'Achieved 90% accuracy in candidate-job matching',
            'Improved recruiter productivity by 50%'
        ]
    },
    
    'defect': {
        id: 'defect',
        title: 'AI-Powered Defect Detection',
        subtitle: 'in Manufacturing',
        image: 'assets/images/case-studies/Defect Detection in Manufacturing.png',
        description: 'Enhancing Accuracy, Speed, and Cost Efficiency in Visual Inspection Processes.',
        client: 'Global Manufacturing Leader',
        industry: 'Manufacturing',
        industryColor: 'red',
        problem: {
            intro: 'In traditional manufacturing processes, visual inspection methods suffer from several critical limitations, necessitating a shift towards AI-powered defect detection.',
            points: [
                'Time-consuming manual inspection processes that hinder production efficiency',
                'High susceptibility to human error, leading to inconsistent quality control',
                'Limited scalability, making it challenging to handle large volumes of products',
                'Risk of missing subtle defects that can impact product quality and customer satisfaction'
            ]
        },
        solution: {
            intro: 'Implementing computer vision AI for defect detection revolutionizes the manufacturing process. This solution involves several key steps:',
            components: [
                {
                    title: 'Data Collection and Annotation',
                    description: 'Gather a diverse dataset of product images or videos containing various types of defects. Annotate these images with labels indicating the presence and location of defects.',
                    icon: 'data',
                    color: 'blue'
                },
                {
                    title: 'Model Training',
                    description: 'Utilize deep learning techniques, such as convolutional neural networks (CNNs), to train the computer vision AI model on the annotated dataset.',
                    icon: 'model',
                    color: 'purple'
                },
                {
                    title: 'Real-time Inspection System',
                    description: 'Deploy the trained AI model into a real-time inspection system integrated into the manufacturing process, capturing and analyzing products instantly.',
                    icon: 'realtime',
                    color: 'green'
                },
                {
                    title: 'Defect Identification and Reporting',
                    description: 'When defects are detected, the system flags the defective product and generates detailed reports with images highlighting the detected defects.',
                    icon: 'report',
                    color: 'red'
                }
            ]
        },
        metrics: [
            { value: 95, label: 'Accuracy', description: 'Detection accuracy' },
            { value: 50, label: 'Speed', description: 'Faster inspection' },
            { value: 30, label: 'Cost Savings', description: 'Operational savings' },
            { value: 50, label: 'Defect Reduction', description: 'Quality improvement' }
        ],
        technologies: ['Computer Vision', 'Deep Learning', 'CNNs', 'Edge Computing', 'Real-time Processing', 'Image Annotation', 'GPU Processing', 'Industrial IoT'],
        conclusion: 'Visual inspection in manufacturing using computer vision AI offers significant improvements in accuracy, speed, cost efficiency, and defect reduction. Meeting the quantified success metrics ensures a successful implementation that enhances product quality and customer satisfaction while optimizing manufacturing processes.',
        achievements: [
            'Achieved 95% accuracy in defect detection',
            'Reduced inspection time by 50%',
            'Decreased overall defect rate by 50% improving product quality'
        ]
    }
};

// Update icon mappings to include all icons
const iconMap = {
    'device': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />',
    'mobile': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />',
    'cloud': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />',
    'chart': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM13 19v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2zM21 19v-8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2z" />',
    'api': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
    'document': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />',
    'workflow': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />',
    'portal': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
    'assessment': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />',
    'system': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />',
    'migration': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />',
    'security': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />',
    'training': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',
    'clock': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />',
    'refresh': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />',
    'tasks': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />',
    'report': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />',
    'update': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />',
    'convert': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />',
    'index': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />',
    'route': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />',
    'tracking': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />',
    'analytics': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />',
    'match': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />',
    'rank': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />',
    'query': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
    'learning': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />',
    'data': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />',
    'model': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />',
    'realtime': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
};

// Color mappings
const colorMap = {
    'green': { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', border: 'from-green-600 to-emerald-600' },
    'blue': { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'from-blue-600 to-indigo-600' },
    'purple': { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', border: 'from-purple-600 to-pink-600' },
    'orange': { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', border: 'from-orange-600 to-red-600' },
    'primary': { bg: 'bg-primary-100 dark:bg-primary-900/30', text: 'text-primary-600 dark:text-primary-400', border: 'from-primary-600 to-blue-600' }
};

// Get case study ID from URL
function getCaseStudyId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'vitals'; // Default to vitals if no ID
}

// Render the case study
function renderCaseStudy() {
    const caseId = getCaseStudyId();
    const caseData = caseStudiesData[caseId];
    
    if (!caseData) {
        // Handle case study not found
        document.getElementById('case-study-content').innerHTML = `
            <div class="min-h-screen flex items-center justify-center">
                <div class="text-center">
                    <h1 class="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <a href="case-studies.html" class="text-primary-600 hover:underline">Back to Case Studies</a>
                </div>
            </div>
        `;
        return;
    }
    
    // Update page title and meta
    document.getElementById('page-title').textContent = `${caseData.title} - Case Study | Nainovate`;
    document.getElementById('page-description').setAttribute('content', caseData.description);
    
    // Generate HTML
    const colors = colorMap[caseData.industryColor] || colorMap.green;
    
    const html = `
        <!-- Hero Section -->
        <section class="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb -->
                <nav class="mb-8">
                    <ol class="flex items-center space-x-2 text-sm">
                        <li><a href="index.html" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Home</a></li>
                        <li><span class="text-gray-400">/</span></li>
                        <li><a href="case-studies.html" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Case Studies</a></li>
                        <li><span class="text-gray-400">/</span></li>
                        <li class="text-gray-700 dark:text-gray-300">${caseData.title}</li>
                    </ol>
                </nav>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span class="inline-block px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4">
                            ${caseData.industry}
                        </span>
                        <h1 class="text-4xl md:text-5xl font-bold mb-6">
                            ${caseData.title} ${caseData.subtitle}
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            ${caseData.description}
                        </p>
                        
                        <!-- Quick Stats -->
                        <div class="grid grid-cols-3 gap-6">
                            ${caseData.metrics.slice(0, 3).map((metric, index) => {
                                const metricColors = ['text-primary-600', 'text-green-600', 'text-blue-600'];
                                return `
                                    <div>
                                        <div class="text-3xl font-bold ${metricColors[index]}">${metric.value}%</div>
                                        <div class="text-sm text-gray-600 dark:text-gray-400">${metric.label}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="aspect-w-16 aspect-h-12 rounded-2xl h-96 overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <img src="${caseData.image || 'assets/images/case-studies/placeholder.jpg'}" 
                                alt="${caseData.title}" 
                                class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Problem Section -->
        <section class="py-20 bg-white dark:bg-black">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center mb-8">
                    <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-4">
                        <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold">The Problem</h2>
                </div>
                
                <div class="prose prose-lg dark:prose-invert max-w-none">
                    <p>${caseData.problem.intro}</p>
                    
                    <p class="font-semibold mt-6 mb-4">The company recognized the need to:</p>
                    
                    <ul class="space-y-3">
                        ${caseData.problem.points.map(point => `
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>${point}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- Solution Section -->
        <section class="py-20 bg-gray-50 dark:bg-gray-950">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center mb-12">
                    <div class="w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mr-4">
                        <svg class="w-8 h-8 ${colors.text}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold">Our Solution</h2>
                </div>
                
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-4xl">
                    ${caseData.solution.intro}
                </p>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${caseData.solution.components.map(component => {
                        const componentColors = colorMap[component.color] || colorMap.primary;
                        return `
                            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                                <div class="w-12 h-12 ${componentColors.bg} rounded-lg flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 ${componentColors.text}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        ${iconMap[component.icon] || iconMap.device}
                                    </svg>
                                </div>
                                <h3 class="text-xl font-semibold mb-3">${component.title}</h3>
                                <p class="text-gray-600 dark:text-gray-400">
                                    ${component.description}
                                </p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>
        
        <!-- Success Metrics Section -->
        <section class="py-20 bg-white dark:bg-black">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold mb-4">Success Metrics</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400">
                        Measurable impact and results achieved
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-${caseData.metrics.length > 4 ? '5' : '4'} gap-8">
                    ${caseData.metrics.map((metric, index) => {
                        // Calculate stroke offset for circle progress
                        const circumference = 2 * Math.PI * 56;
                        const offset = circumference - (metric.value / 100) * circumference;
                        
                        // Different colors for each metric
                        const strokeColors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899'];
                        const strokeColor = strokeColors[index % strokeColors.length];
                        
                        return `
                            <div class="text-center">
                                <div class="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                                    <svg class="w-32 h-32 transform -rotate-90">
                                        <circle cx="64" cy="64" r="56" stroke="#e5e7eb" stroke-width="8" fill="none" />
                                        <circle cx="64" cy="64" r="56" stroke="${strokeColor}" stroke-width="8" fill="none"
                                                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
                                    </svg>
                                    <span class="absolute text-3xl font-bold">${metric.value}%</span>
                                </div>
                                <h3 class="font-semibold mb-1">${metric.label}</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400">${metric.description}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>
        
        <!-- Technologies Used -->
        <section class="py-20 bg-gray-50 dark:bg-gray-950">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Technologies Used</h2>
                
                <div class="flex flex-wrap justify-center gap-4">
                    ${caseData.technologies.map(tech => `
                        <span class="px-6 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-md text-gray-700 dark:text-gray-300 font-medium">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        </section>
        
        <!-- Conclusion Section -->
            <section class="py-20 bg-white dark:bg-black">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-2xl p-8 md:p-12">
                        <h2 class="text-3xl font-bold mb-6">Conclusion</h2>
                        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            ${caseData.conclusion}
                        </p>
                        
                        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h3 class="text-xl font-semibold mb-4">Key Achievements:</h3>
                            <ul class="space-y-2">
                                ${caseData.achievements.map(achievement => `
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>${achievement}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your ${caseData.industry} Solution?
                    </h2>
                    <p class="text-xl mb-8 text-white/90">
                        Let's discuss how we can help you achieve similar results
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="contact.html" class="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Start Your Project
                        </a>
                        <a href="case-studies.html" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                            View More Case Studies
                        </a>
                    </div>
                </div>
            </section>
    `;
    
    document.getElementById('case-study-content').innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCaseStudy();
});