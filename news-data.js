const NEWS_DATA = {
  lastScan: "2026-02-18T07:25:00Z",
  accounts: [
    {name:"Canvas Credit Union",status:"Client",city:"Denver",state:"CO",industry:"Financial Services",priority:3,news:[]},
    {name:"Carparts.com Inc",status:"Client",city:"Torrance",state:"CA",industry:"Auto Parts / E-Commerce",priority:3,news:[
      {title:"CarParts.com Sets Q4 2025 Conference Call for March 5, 2026",snippet:"CarParts.com will hold its quarterly earnings conference call on March 5, 2026, signaling continued public reporting cadence.",url:"https://www.tmcnet.com/usubmit/2026/02/12/10332209.htm",date:"Feb 2026",insight:"Earnings call coming up — good time to reach out about direct mail campaigns to drive e-commerce customer acquisition."}
    ]},
    {name:"Liberty Debt Relief LLC",status:"Client",city:"Orange",state:"CA",industry:"Financial Services",priority:3,news:[]},
    {name:"Mattress Firm Inc.",status:"Potential Client",city:"Houston",state:"TX",industry:"Retail / Mattress",priority:5,news:[
      {title:"Somnigroup (Mattress Firm parent) Reports Q4 Results",snippet:"Somnigroup International, Mattress Firm's parent company, reported Q4 results testing whether the world's largest bedding company can sustain momentum from a transformative year.",url:"",date:"Feb 2026",insight:"Post-IPO Mattress Firm is investing in growth — direct mail could support store traffic and promotions in a competitive Presidents Day sales season."}
    ]},
    {name:"Prudent FS Inc",status:"Client",city:"New York City",state:"NY",industry:"Financial Services",priority:2,news:[]},
    {name:"Savannah Bee Company Inc.",status:"Potential Client",city:"Savannah",state:"GA",industry:"Consumer Goods / Food",priority:2,news:[]},
    {name:"SoFi Lending Corp.",status:"Potential Client",city:"San Francisco",state:"CA",industry:"Financial Services / Fintech",priority:5,news:[
      {title:"SoFi Q4 Earnings Beat Expectations; Stock Rises",snippet:"SoFi Technologies delivered strong Q4 results with $38B in deposits. Shares rose as analysts highlighted rising star status vs. fading competitors.",url:"",date:"Jan 2026",insight:"SoFi is scaling fast with 60M+ users — massive direct mail opportunity for cross-selling lending, banking, and investment products to their growing customer base."},
      {title:"SoFi Stock Pullback Creates Buying Opportunity",snippet:"SoFi shares pulled back after earnings but analysts see upside, with strong deposit growth and expanding product suite.",url:"",date:"Feb 2026",insight:"During growth phases, fintechs invest heavily in customer acquisition — direct mail is a proven channel for financial services outreach."}
    ]},
    {name:"The Chair King Inc",status:"Potential Client",city:"Houston",state:"TX",industry:"Retail / Furniture",priority:2,news:[]},
    {name:"The PNC Financial Services Group Inc",status:"Potential Client",city:"Pittsburgh",state:"PA",industry:"Financial Services / Banking",priority:5,news:[
      {title:"PNC's CCRO Retires, Triggering Executive Promotions",snippet:"PNC's Chief Credit Risk Officer retired, promoting two Pittsburgh-based executives who will both report directly to the CEO.",url:"",date:"Feb 2026",insight:"Leadership changes create new decision-makers — great time to introduce Quad's direct mail capabilities to newly promoted execs."},
      {title:"PNC CFO Highlights Acquisition Opportunities",snippet:"PNC CFO Rob Reilly says recent acquisition presents new opportunities including areas that big banks are expanding into.",url:"",date:"Jan 2026",insight:"PNC is expanding through acquisitions — new business lines need marketing support, including direct mail for customer onboarding."},
      {title:"PNC Economic Outlook Report Released",snippet:"PNC released a new economic outlook report offering insights to business leaders, investors, and households navigating an evolving economic landscape.",url:"",date:"Feb 2026",insight:"PNC is positioning itself as a thought leader — Quad could support with high-quality printed reports and direct mail thought leadership campaigns."}
    ]},
    {name:"Verizon Wireless Inc.",status:"Past Client",city:"Basking Ridge",state:"NJ",industry:"Telecommunications",priority:5,news:[
      {title:"Perpetual Innovation Expands Verizon Partnership",snippet:"Perpetual Innovation announced 2026 expansion plans including deeper Verizon results and new offices.",url:"",date:"Feb 2026",insight:"Verizon is working with partners on expansion — as a past client, Emmett can reference previous work and pitch new direct mail programs."},
      {title:"Verizon Small Business Digital Ready Grant Awarded",snippet:"Reliance Contractors received the Verizon Small Business Digital Ready Grant, showing Verizon's investment in small business programs.",url:"",date:"Feb 2026",insight:"Verizon's small business programs could benefit from direct mail to drive grant awareness and small business engagement."}
    ]},
    {name:"Affirm Inc.",status:"Potential Client",city:"San Francisco",state:"CA",industry:"Financial Services / Fintech",priority:4,news:[
      {title:"Affirm Reports Strong Fiscal Q2 2026 Earnings",snippet:"BNPL fintech Affirm unveiled fiscal Q2 2026 earnings showcasing operational momentum despite market uncertainties.",url:"",date:"Feb 2026",insight:"Affirm is growing and profitable — direct mail could help them reach merchants and consumers for BNPL adoption."},
      {title:"Affirm Partners with Lowe's for BNPL",snippet:"Lowe's expanded checkout flexibility by adding buy-now-pay-later plans through Affirm, creating a major retail partnership.",url:"",date:"Feb 2026",insight:"Affirm is landing major retail partnerships — direct mail co-marketing campaigns with retail partners could drive BNPL adoption."},
      {title:"Affirm Launches Rent Payment Pilot",snippet:"Affirm is piloting BNPL for rent payments, giving renters the option to break up rent into two equal payments.",url:"",date:"Feb 2026",insight:"New product launch = new marketing needs. Direct mail to renters could be a powerful channel for this new offering."}
    ]},
    {name:"Allo Communications LLC",status:"Potential Client",city:"Imperial",state:"NE",industry:"Telecommunications / Fiber",priority:4,news:[]},
    {name:"American Furniture Warehouse Co Inc",status:"Potential Client",city:"Englewood",state:"CO",industry:"Retail / Furniture",priority:5,news:[]},
    {name:"Artisan Home Loans LLC",status:"Potential Client",city:"Denver",state:"CO",industry:"Financial Services / Mortgage",priority:2,news:[]},
    {name:"Atlassian Corporation",status:"Potential Client",city:"San Francisco",state:"CA",industry:"Technology / Software",priority:3,news:[
      {title:"Atlassian Reports Strong Q2 FY2026 Results",snippet:"Atlassian reported upbeat Q2 fiscal 2026 results with cloud revenue hitting $1B quarterly run rate and 20%+ annual revenue growth guidance.",url:"",date:"Jan 2026",insight:"Atlassian is a tech giant but likely not a direct mail prospect — more relevant as a technology partner or for B2B event marketing."},
      {title:"Anthropic Partners with Atlassian Williams F1 Team",snippet:"AI company Anthropic struck a multi-year partnership with the Atlassian Williams F1 team, highlighting Atlassian's brand expansion into sports.",url:"",date:"Feb 2026",insight:"Atlassian is investing in brand awareness through sports sponsorships — could be open to multichannel brand campaigns including print."}
    ]},
    {name:"Audo North America Inc",status:"Client",city:"Nordhavn",state:"",industry:"Design / Furniture",priority:2,news:[]},
    {name:"Authority Brands LLC",status:"Potential Client",city:"Columbia",state:"MD",industry:"Home Services / Franchise",priority:5,news:[
      {title:"Authority Brands Appoints Ryan Bowes as Chief Growth and Transformation Officer",snippet:"Authority Brands appointed Ryan Bowes as Chief Growth and Transformation Officer, advancing the home services franchisor's next phase of growth.",url:"https://www.morningstar.com/news/pr-newswire/20260202ny76530/authority-brands-appoints-ryan-bowes-as-chief-growth-and-transformation-officer-advancing-the-home-services-franchisors-next-phase-of-growth",date:"Feb 2026",insight:"New CGO focused on growth and transformation — perfect time to pitch direct mail for franchise lead generation and local marketing support."}
    ]},
    {name:"Battlbox LLC",status:"Past Client",city:"Milledgeville",state:"GA",industry:"E-Commerce / Subscription",priority:2,news:[]},
    {name:"Big R Holdings Inc",status:"Potential Client",city:"Pueblo",state:"CO",industry:"Retail / Farm & Ranch",priority:2,news:[]},
    {name:"Blue Dot Tours LLC",status:"Client",city:"Scituate",state:"MA",industry:"Travel / Tourism",priority:3,news:[]},
    {name:"Brakes Plus Inc",status:"Potential Client",city:"Centennial",state:"CO",industry:"Automotive Services",priority:4,news:[]},
    {name:"Buddy's Newco LLC",status:"Potential Client",city:"Orlando",state:"FL",industry:"Retail / Rent-to-Own",priority:4,news:[]},
    {name:"CHOMPS",status:"Potential Client",city:"Naples",state:"FL",industry:"Consumer Goods / Food",priority:3,news:[]},
    {name:"Codex Labs Corporation",status:"Potential Client",city:"San Jose",state:"CA",industry:"Beauty / Skincare",priority:2,news:[]},
    {name:"Country Mutual Insurance Co Inc.",status:"Past Client",city:"Bloomington",state:"IL",industry:"Insurance",priority:5,news:[]},
    {name:"Credit Associates LLC",status:"Potential Client",city:"Dallas",state:"TX",industry:"Financial Services / Debt Relief",priority:4,news:[]},
    {name:"CrossCountry Mortgage LLC",status:"Potential Client",city:"Brecksville",state:"OH",industry:"Financial Services / Mortgage",priority:5,news:[
      {title:"CrossCountry Mortgage Closes 2025 with Company Records",snippet:"CCM closed 2025 with record results and impressive momentum, maintaining its position as the nation's #1 retail mortgage lender for the third consecutive year.",url:"",date:"Jan 2026",insight:"Record year and #1 lender status — they're investing in growth. Direct mail is a proven channel for mortgage marketing to homebuyers and refinance candidates."},
      {title:"CrossCountry Mortgage Hires Regional VP Sam Sharp",snippet:"CCM welcomed industry veteran Sam Sharp as Regional Vice President, continuing aggressive hiring and expansion.",url:"",date:"Jan 2026",insight:"Aggressive hiring signals expansion — new regions need marketing support. Pitch direct mail programs for new market penetration."}
    ]},
    {name:"C Spire Advanced Data Solutions LLC",status:"Potential Client",city:"Ridgeland",state:"MS",industry:"Telecommunications",priority:4,news:[]},
    {name:"Davita Inc.",status:"Past Client",city:"Denver",state:"CO",industry:"Healthcare / Dialysis",priority:4,news:[
      {title:"DaVita Q4 Earnings Beat Estimates, Shares Surge",snippet:"DaVita projected annual profit above estimates after reporting better-than-expected Q4 results on steady demand for kidney dialysis services.",url:"",date:"Feb 2026",insight:"Strong earnings and positive 2026 guidance — DaVita may be investing in patient outreach. Direct mail is effective for healthcare patient communications."},
      {title:"DaVita Issues Strong 2026 Guidance",snippet:"DaVita stock surged after beating earnings estimates and issuing strong 2026 guidance, signaling stable treatment volumes and higher reimbursement rates.",url:"",date:"Feb 2026",insight:"As a past client with strong financials, DaVita could be receptive to restarting direct mail campaigns for patient acquisition and education."}
    ]},
    {name:"Deckers Outdoor Corporation",status:"Past Client",city:"Goleta",state:"CA",industry:"Footwear / Apparel",priority:5,news:[
      {title:"Deckers Q3 FY2026 Earnings Crush Expectations",snippet:"Deckers reported fiscal Q3 2026 EPS of $3.33 vs $2.80 expected, with revenue of $1.95B beating estimates. Shares up 15%.",url:"",date:"Jan 2026",insight:"Record earnings driven by HOKA and UGG — Deckers is spending heavily on marketing. Direct mail catalogs and brand campaigns could complement their digital push."},
      {title:"UGG Launches Spring 2026 Campaign with Central Cee",snippet:"UGG launched its Spring 2026 clogs and mules campaign featuring global rap star Central Cee, showing aggressive brand marketing.",url:"",date:"Feb 2026",insight:"Major campaign launches mean increased marketing spend — pitch direct mail as a premium channel to drive retail traffic and DTC sales."},
      {title:"HOKA Launches Speedgoat 7 and Cielo X1 3.0",snippet:"Deckers is expanding HOKA's lineup with new trail and race shoes alongside new global campaigns.",url:"",date:"Feb 2026",insight:"New product launches with global campaigns — direct mail lookbooks and product announcements could enhance their omnichannel strategy."}
    ]},
    {name:"Eargo Inc.",status:"Potential Client",city:"Mountain View",state:"CA",industry:"Healthcare / Hearing Aids",priority:4,news:[]},
    {name:"Empower Annuity Insurance Company of America",status:"Past Client",city:"Overland Park",state:"KS",industry:"Financial Services / Retirement",priority:5,news:[
      {title:"Empower Reports Record 2025 Financial Results",snippet:"Empower announced record financial results for 2025, achieving base earnings of $1.1 billion, an increase of 11% from 2024, driven by sustained business growth.",url:"",date:"Feb 2026",insight:"Record earnings and 11% growth — Empower is thriving. As a past client, this is the perfect time to re-engage about direct mail for retirement plan participant communications."}
    ]},
    {name:"Exclusive Resorts LLC",status:"Potential Client",city:"Denver",state:"CO",industry:"Travel / Luxury",priority:4,news:[
      {title:"Exclusive Collective Acquires Inspirato for $59M",snippet:"Exclusive Resorts' parent company Exclusive Collective completed a $59M acquisition of Inspirato, taking Inspirato private.",url:"https://www.bizjournals.com/denver/news/2026/02/04/exclusive-collective-inspirato-acquisition.html",date:"Feb 2026",insight:"Major acquisition means expanded customer base and brand portfolio — direct mail is ideal for luxury travel marketing to high-net-worth audiences."}
    ]},
    {name:"Expedia Group Inc.",status:"Potential Client",city:"Seattle",state:"WA",industry:"Travel / Online",priority:4,news:[
      {title:"Expedia Reports Fastest Revenue Growth in Three Years",snippet:"Expedia Group Q4 revenue rose at its fastest pace in three years, driven by resilient US travel demand.",url:"",date:"Feb 2026",insight:"Strong growth and expanding B2B business — Expedia could use direct mail for travel agency partner marketing and loyalty programs."},
      {title:"Expedia Forecasts 6-9% Revenue Growth for 2026",snippet:"For full year 2026, Expedia expects gross bookings growth of 6-8% and revenue growth of 6-9%.",url:"",date:"Feb 2026",insight:"Bullish 2026 outlook means marketing budgets are likely expanding — good time to pitch direct mail for destination marketing and travel promotions."},
      {title:"Expedia Cruises Sets Ambitious 2026 Expansion Goals",snippet:"Expedia Cruises is setting ambitious expansion and recruitment goals for 2026 following a strong 2025 marked by franchise growth.",url:"",date:"Feb 2026",insight:"Franchise expansion = need for local marketing materials and direct mail to recruit travel advisors and reach cruise customers."}
    ]},
    {name:"Ezee Fiber Texas LLC",status:"Potential Client",city:"Houston",state:"TX",industry:"Telecommunications / Fiber",priority:4,news:[]},
    {name:"First Montana Bank Inc.",status:"Potential Client",city:"Missoula",state:"MT",industry:"Financial Services / Banking",priority:2,news:[]},
    {name:"First Savings Financial Group Inc.",status:"Potential Client",city:"Jeffersonville",state:"IN",industry:"Financial Services / Banking",priority:2,news:[]},
    {name:"General Motors Financial Company Inc.",status:"Potential Client",city:"Fort Worth",state:"TX",industry:"Financial Services / Auto Finance",priority:5,news:[
      {title:"GM Reports Blowout Q4 Earnings, $6B Buyback",snippet:"GM stock rose 9% after reporting Q4 adjusted EPS of $2.51, beating estimates. The company announced a new $6 billion share buyback program.",url:"",date:"Jan 2026",insight:"Record performance and new leadership in ventures — GM Financial may be expanding marketing for auto lending products. Direct mail is proven for auto finance offers."},
      {title:"GM Appoints Claudia Gast to Lead Expanded Ventures Role",snippet:"Claudia Gast joins GM amid departure of former GM Ventures president, taking on an expanded role.",url:"",date:"Feb 2026",insight:"New leadership in ventures/innovation — potential for new marketing approaches including direct mail for GM Financial products."}
    ]},
    {name:"Global Federal Credit Union",status:"Potential Client",city:"Anchorage",state:"AK",industry:"Financial Services / Credit Union",priority:3,news:[]},
    {name:"GoPro Inc.",status:"Potential Client",city:"San Mateo",state:"CA",industry:"Consumer Electronics",priority:3,news:[
      {title:"GoPro Announces Freeride World Tour Mini-Series",snippet:"GoPro and the Freeride World Tour announced 'Off the Record' mini-series for the 2026 season, with GoPro as official camera partner.",url:"",date:"Feb 2026",insight:"GoPro is investing in content marketing and brand partnerships — direct mail could support product launches and enthusiast community engagement."}
    ]},
    {name:"Greenlight Networks LLC",status:"Potential Client",city:"Rochester",state:"NY",industry:"Telecommunications / Fiber",priority:4,news:[]},
    {name:"Guiry's Inc",status:"Potential Client",city:"Denver",state:"CO",industry:"Retail / Paint & Design",priority:2,news:[]},
    {name:"iMerge LLC",status:"Potential Client",city:"Carlsbad",state:"CA",industry:"Technology / M&A Advisory",priority:1,news:[]},
    {name:"Import Packaging JV LLP",status:"Potential Client",city:"River Edge",state:"NJ",industry:"Packaging",priority:1,news:[]},
    {name:"Inspirato LLC",status:"Potential Client",city:"Denver",state:"CO",industry:"Travel / Luxury",priority:4,news:[
      {title:"Inspirato Acquired by Exclusive Collective for $59M",snippet:"Inspirato was taken private after Exclusive Collective (parent of Exclusive Resorts) completed a $59M acquisition deal.",url:"https://www.bizjournals.com/denver/news/2026/02/04/exclusive-collective-inspirato-acquisition.html",date:"Feb 2026",insight:"Major ownership change — new leadership may be rethinking marketing strategy. Direct mail is perfect for luxury travel member acquisition and retention."}
    ]},
    {name:"Janus Henderson Investors",status:"Past Client",city:"Denver",state:"CO",industry:"Financial Services / Asset Management",priority:4,news:[
      {title:"Janus Henderson Launches Privacore VPC Asset Backed Credit Fund",snippet:"Janus Henderson affiliates launched the Privacore VPC Asset Backed Credit Fund with initial $250M, expanding into alternative investments.",url:"",date:"Feb 2026",insight:"New fund launches need investor marketing — direct mail is a premium channel for reaching financial advisors and institutional investors."},
      {title:"Kapstream Capital (Janus Henderson) Launching ASX Listed Investment Trust",snippet:"Janus Henderson subsidiary Kapstream Capital is launching a listed investment trust on the ASX to meet growing income product demand.",url:"",date:"Feb 2026",insight:"International expansion and new products = marketing opportunities. As a past client, re-engage about fund launch marketing materials."}
    ]},
    {name:"John M. Floyd and Associates Inc.",status:"Potential Client",city:"Houston",state:"TX",industry:"Financial Services / Consulting",priority:2,news:[]},
    {name:"Keen Inc",status:"Potential Client",city:"Portland",state:"OR",industry:"Footwear / Outdoor",priority:3,news:[
      {title:"KEEN Appoints New Head of Sustainability",snippet:"KEEN hired a new sustainability leader with climate science background to lead the footwear company's environmental focus.",url:"",date:"Feb 2026",insight:"New sustainability leadership — direct mail on recycled/sustainable paper could align with their brand values and environmental messaging."}
    ]},
    {name:"Koia",status:"Potential Client",city:"Los Angeles",state:"CA",industry:"Consumer Goods / Beverages",priority:2,news:[]},
    {name:"Kruszyna Baugher Partners LLC",status:"Potential Client",city:"Harrisonburg",state:"VA",industry:"Professional Services",priority:1,news:[]},
    {name:"Lancer Skincare LLC",status:"Potential Client",city:"Beverly Hills",state:"CA",industry:"Beauty / Skincare",priority:2,news:[]},
    {name:"Legacy Restoration LLC",status:"Potential Client",city:"Plymouth",state:"MN",industry:"Home Services / Roofing",priority:2,news:[]},
    {name:"LendingPoint LLC",status:"Potential Client",city:"Kennesaw",state:"GA",industry:"Financial Services / Fintech",priority:4,news:[]},
    {name:"LinkSoul Inc.",status:"Past Client",city:"Oceanside",state:"CA",industry:"Apparel / Golf",priority:2,news:[]},
    {name:"Lively Inc.",status:"Potential Client",city:"San Francisco",state:"CA",industry:"Financial Services / HSA",priority:3,news:[]},
    {name:"LXE Hearing",status:"Potential Client",city:"Boston",state:"MA",industry:"Healthcare / Hearing Aids",priority:2,news:[]},
    {name:"Mainscape Inc.",status:"Potential Client",city:"Fishers",state:"IN",industry:"Landscaping / Commercial",priority:2,news:[]},
    {name:"Marketing Mail Management Solutions",status:"Potential Client",city:"Aldie",state:"VA",industry:"Marketing / Mail Services",priority:2,news:[]},
    {name:"Massey Services Inc",status:"Potential Client",city:"Orlando",state:"FL",industry:"Home Services / Pest Control",priority:4,news:[]},
    {name:"NBH Bank",status:"Potential Client",city:"Greenwood Village",state:"CO",industry:"Financial Services / Banking",priority:3,news:[]},
    {name:"O.K.I Furniture Fair LLC",status:"Potential Client",city:"Fairfield",state:"OH",industry:"Retail / Furniture",priority:2,news:[]},
    {name:"Osaic Inc",status:"Past Client",city:"New York",state:"NY",industry:"Financial Services / Wealth Management",priority:5,news:[
      {title:"Osaic Expands with New Independent Advisor Launches",snippet:"Osaic announced multiple new independent financial advisor firm launches, including a $232M practice in St. Louis and new teams across the country.",url:"",date:"Feb 2026",insight:"Rapid advisor recruitment and expansion — each new practice needs marketing support. Direct mail for advisor branding and client acquisition is a natural fit."},
      {title:"Osaic Announces 2026 W Forum Conference",snippet:"Osaic announced details of its 2026 W Forum, the firm's annual conference dedicated to supporting, connecting and empowering women in wealth management.",url:"",date:"Feb 2026",insight:"Conference marketing is a perfect direct mail opportunity — event invitations, programs, and follow-up materials."}
    ]},
    {name:"Patriot Mobile LLC",status:"Potential Client",city:"Grapevine",state:"TX",industry:"Telecommunications / MVNO",priority:4,news:[
      {title:"Patriot Mobile Launches Children's Book Series",snippet:"Patriot Mobile launched 'Patriot Pals,' a children's book series teaching digital wisdom, phone safety, and patriotic values alongside their Wisephone II device.",url:"",date:"Feb 2026",insight:"Brand diversification into content — direct mail could support Wisephone II marketing and book distribution to their conservative family audience."}
    ]},
    {name:"Publicis USA Production Solutions Inc",status:"Potential Client",city:"Chicago",state:"IL",industry:"Advertising / Agency",priority:4,news:[
      {title:"Publicis Groupe Reports Strong Q4 2025 Growth",snippet:"Publicis reported +5.9% Q4 organic growth, raised dividend to €3.75/share, and outlined 2026 guidance emphasizing AI-enabled services.",url:"",date:"Feb 2026",insight:"Publicis is a major agency — they buy print and direct mail on behalf of clients. Building a relationship here could unlock multiple client accounts."},
      {title:"Publicis Partners on AI Trust Initiative",snippet:"Publicis is partnering to support advanced AI capabilities built on trusted foundations, advancing their tech-forward strategy.",url:"",date:"Feb 2026",insight:"Publicis is investing heavily in AI — position Quad's data-driven direct mail and personalization capabilities as complementary to their AI strategy."}
    ]},
    {name:"PureTalk Holdings Inc",status:"Client",city:"Covington",state:"GA",industry:"Telecommunications / MVNO",priority:3,news:[]},
    {name:"Radisys Corporation",status:"Potential Client",city:"Beaverton",state:"OR",industry:"Technology / Telecom Infrastructure",priority:1,news:[]},
    {name:"Resident Home LLC",status:"Potential Client",city:"Jeffersonville",state:"IN",industry:"DTC / Mattress",priority:5,news:[]},
    {name:"Ryan Lawn & Tree Inc.",status:"Potential Client",city:"Merriam",state:"KS",industry:"Home Services / Lawn Care",priority:3,news:[]},
    {name:"Sail Internet Inc.",status:"Potential Client",city:"Palo Alto",state:"CA",industry:"Telecommunications / ISP",priority:2,news:[]},
    {name:"Sonic Telecom LLC",status:"Potential Client",city:"Santa Rosa",state:"CA",industry:"Telecommunications / ISP",priority:4,news:[]},
    {name:"SpecSeats Intl Corp.",status:"Potential Client",city:"East Rancho Dominguez",state:"CA",industry:"Manufacturing / Seating",priority:1,news:[]},
    {name:"Surf Inc.",status:"Client",city:"Marina Del Rey",state:"CA",industry:"Telecommunications / ISP",priority:3,news:[]},
    {name:"Tachus LLC",status:"Potential Client",city:"The Woodlands",state:"TX",industry:"Telecommunications / Fiber",priority:4,news:[]},
    {name:"The Tile Shop Inc",status:"Potential Client",city:"Plymouth",state:"MN",industry:"Retail / Home Improvement",priority:4,news:[]},
    {name:"Three Day Rule Inc.",status:"Potential Client",city:"Los Angeles",state:"CA",industry:"Dating / Matchmaking",priority:1,news:[]},
    {name:"Thule Inc.",status:"Past Client",city:"Seymour",state:"CT",industry:"Outdoor / Cargo & Sport",priority:3,news:[
      {title:"Thule Group Q4 and Full-Year Net Sales Increase 9%",snippet:"Thule Group net sales increased 9% year-over-year both in Q4 and full year 2025, driven by product updates in Sports & Cargo Carriers.",url:"https://www.bicycleretailer.com/industry-news/2026/02/10/thules-q4-full-year-net-sales-increase-9",date:"Feb 2026",insight:"9% sales growth shows strong brand momentum — as a past client, pitch direct mail for new product launches and seasonal catalogs targeting outdoor enthusiasts."}
    ]},
    {name:"Ting Fiber LLC",status:"Client",city:"Centennial",state:"CO",industry:"Telecommunications / Fiber",priority:3,news:[]},
    {name:"Transamerica",status:"Past Client",city:"Cedar Rapids",state:"IA",industry:"Financial Services / Insurance",priority:5,news:[]},
    {name:"Travis Credit Union",status:"Potential Client",city:"Vacaville",state:"CA",industry:"Financial Services / Credit Union",priority:4,news:[]},
    {name:"TVG Production Corporation",status:"Potential Client",city:"Essex Junction",state:"VT",industry:"Manufacturing",priority:1,news:[]},
    {name:"United Financial Network Inc",status:"Potential Client",city:"New York City",state:"NY",industry:"Financial Services",priority:2,news:[]},
    {name:"VeraBank Inc.",status:"Potential Client",city:"Henderson",state:"TX",industry:"Financial Services / Banking",priority:2,news:[]},
    {name:"Visit Truckee",status:"Potential Client",city:"Truckee",state:"CA",industry:"Travel / Tourism",priority:2,news:[]},
    {name:"VyStar Credit Union",status:"Potential Client",city:"Jacksonville",state:"FL",industry:"Financial Services / Credit Union",priority:5,news:[
      {title:"VyStar Presents 2026 Think Bold Honors Awards",snippet:"The Think Bold Festival & Conference announced 2026 Think Bold Honors Awards presented by VyStar Credit Union, to be held April 2nd at VyStar Headquarters.",url:"https://finance.yahoo.com/news/think-bold-festival-conference-presented-130000884.html",date:"Feb 2026",insight:"VyStar is investing in community events and brand visibility — direct mail invitations and promotional materials for events like this are a natural fit."}
    ]},
    {name:"Vyve Broadband Investments LLC",status:"Potential Client",city:"Shawnee",state:"OK",industry:"Telecommunications / Broadband",priority:4,news:[]},
    {name:"Wealth Enhancement Group LLC",status:"Potential Client",city:"Plymouth",state:"MN",industry:"Financial Services / Wealth Management",priority:4,news:[
      {title:"Wealth Enhancement Group Featured on CNBC Closing Bell",snippet:"Wealth Enhancement Group's Nicole Webb and Ayako Yoshioka appeared on CNBC discussing market catalysts, AI trade, and earnings outlook for 2026.",url:"",date:"Feb 2026",insight:"High media visibility suggests growth phase — wealth management firms use direct mail heavily for client acquisition and advisor recruiting."}
    ]},
    {name:"Xcel Energy Inc",status:"Potential Client",city:"Denver",state:"CO",industry:"Energy / Utilities",priority:5,news:[
      {title:"Xcel Energy Reaffirms 2026 EPS Guidance",snippet:"Xcel Energy reaffirmed 2026 EPS guidance of $4.04-$4.16, consistent with 6-8%+ long-term annual EPS growth target.",url:"",date:"Feb 2026",insight:"Stable growth outlook — utilities use massive amounts of direct mail for customer communications, rate change notices, and energy efficiency programs."},
      {title:"Xcel Energy Managing Wildfire Risk with Power Shutoffs",snippet:"Xcel Energy implemented Public Safety Power Shutoffs in Texas and prepared for severe weather in Colorado, affecting thousands of customers.",url:"",date:"Feb 2026",insight:"Customer communication during outages is critical — direct mail for emergency preparedness guides and post-event follow-ups could be valuable."}
    ]},
    {name:"Lowe's",status:"Potential Client",city:"Mooresville",state:"NC",industry:"Retail / Home Improvement",priority:5,news:[
      {title:"Lowe's Partners with Affirm for BNPL",snippet:"Lowe's expanded checkout flexibility by adding buy-now-pay-later plans through Affirm for home improvement purchases.",url:"",date:"Feb 2026",insight:"New payment partnerships signal customer experience investment — direct mail promoting new financing options could drive store traffic."},
      {title:"Lowe's Cuts 600 Corporate Jobs",snippet:"Lowe's laid off approximately 600 corporate workers to 'strengthen frontline focus while remaining agile,' affecting tech and digital teams.",url:"",date:"Feb 2026",insight:"Corporate restructuring often leads to marketing strategy shifts — new decision-makers may be open to direct mail proposals for customer acquisition."},
      {title:"Lowe's Continues 65-Year Dividend Streak",snippet:"Lowe's paid its latest quarterly dividend of $1.20/share in February 2026, marking 65 consecutive years of dividend increases.",url:"",date:"Feb 2026",insight:"Financial stability and long track record — Lowe's has the budget for large-scale direct mail programs for seasonal promotions and Pro customer outreach."}
    ]},
    {name:"Bosch Tools",status:"Potential Client",city:"Mount Prospect",state:"IL",industry:"Tools / Manufacturing",priority:5,news:[
      {title:"Bosch Returns to Super Bowl with New Ad Campaign",snippet:"Bosch is back in the Super Bowl with a spot featuring Guy Fieri, part of a strategy to grow brand awareness and sales in North America.",url:"",date:"Feb 2026",insight:"Major brand awareness push with Super Bowl ad — direct mail could extend the campaign reach to contractors and DIYers who saw the spot."},
      {title:"Bosch Launches Complete Line of Sight Measuring Tools",snippet:"Bosch highlighted new 'Complete Line of Sight' visibility features for measuring applications on the jobsite.",url:"",date:"Feb 2026",insight:"New product launches aimed at professionals — direct mail catalogs and product samples to contractors could drive trial and adoption."}
    ]},
    {name:"Corebridge Financial",status:"Potential Client",city:"Houston",state:"TX",industry:"Financial Services / Insurance & Annuities",priority:5,news:[
      {title:"Corebridge Financial Reports Record 2025 Results",snippet:"Corebridge reported record sales of $42B in 2025, achieving top 10 position across every major annuity product category, with $2.6B returned to shareholders.",url:"",date:"Feb 2026",insight:"Record sales and major capital returns — Corebridge is investing in growth across annuity products. Direct mail is a core channel for retirement and annuity marketing."},
      {title:"Corebridge Raises Dividend, Highlights Strong ROE",snippet:"Corebridge approved increased quarterly dividend of $0.25/share, with analysts maintaining 'Strong Buy' rating.",url:"",date:"Feb 2026",insight:"Growing and returning capital — financial strength supports marketing investment. Pitch direct mail programs for annuity and retirement product campaigns."}
    ]}
  ]
};

if (typeof module !== 'undefined') module.exports = NEWS_DATA;
