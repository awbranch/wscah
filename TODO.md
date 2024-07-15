
# Top Level Data
x NewsStory
x TeamMember
- Community Hub, Roundtable Member Distributoon Sites???


# Page / Blocks / Components

Page
  _type: "page";
  _id: string;
  path: string;
  title: string;
  description: string;
  maxWidth?: MaxWidth; // Set max width for all component on the page
  blocks?: Block[];

Block
  _type: "block"
  _key: string
  id: Slug
  hidden: boolean
  palette: Palette  - white, gray, blue, dark-blue
  wallpaper 
    fruit bw / color?
    vertical position?
  component spacing?
  components?: Component[];

Component
  _key: string;
  blockId?: string; // copied from block during fetch
  palette: Palette; // copied from block during fetch
  spacing - Allow some responsive spacing around components
  maxWidth? - Allow some responsive max widths for text and titles

Components
x Text - Has multi column setting for newspaper type text    
x MediaCardSet - Holds a set of media cards 2 to 3 per row
x CallToAction
x Announcement - Has a special background
x  IFrame - IFrame or Code EveryAction Form
x  Video - YouTube or other prociders
x Alert - Inline Alert
x ReportSet - List or grid of reports
x Hero - Like a CallToAction but uses larger text and has an option for an image fan
x  TeamTabs - Displays one or more tabs that selects tagged team members
x  NewsTabs - Displays one or more tabs that selects tagged news stories
x  Form - Select list of fields and contacts
x  Timeline
x  LatestNews - Card Set of Image Cards with latest news auto calculated
  ProposedText - For Proposed form letter text with copy button
  FlexBox - Used to create button rows - full width, left, right, center alignment




Button
  // Can be for icon only or for text
  color - background color drives text color
  variant = default | text | outline?
  href
  icon - left or right or only
  
  
MediaCard
  // Always lays them out in threes. 
  // To get text with 2 cards, just make the first card text only with no background
  Background - sets background color - drives text color. Can be transparent
  Alignment - left, right, center
  Image or Icon up top
  Title - S, M, L text sizes
  Text - If both title and text divider auto shows
  DataChart
  Button - various styles
  Link - The entire card can have a link vs just the button
  
MediaCards
  - IconCard
    - Palette
    - Icon - select from list
    - Title: string
    - Text?: string
    - Button
  - ImageCard
    - Palette
    - Image 
    - Title?: string
    - Text? : string
    - Button?
    - Card URL
  - DataCard
    - Palette
    - Title: string
    - Text?: string
    - units: DataUnit;
    - data: DataPoint[];
    get rid of dataset







Text
  // The text color is dictated by the block it sits in
  alignment - left / center / right

# Text Styles

| sanity          | desktop styling                    | html   |
| ----------------| ---------------------------------- | ------ |
| Heading 1       | 5XL Font                           | h1     |
| Heading 2       | 3XL Font                           | h2     |
| Heading 3       | 2XL Font                           | h3     |
| Large           | Body Large                         | p      |
| Normal          | Body Regular                       | p      |
| Small           | Body Small                         | p      |
| Bold            | Doesn't work on headings           | strong |
| Italic          | Doesn't work on headings           | em     |
| Link            | hyperlink                          | a      |
| Highlight       | Select color to highlight the Text | span   |
| Image           | Inline, w/ wrapping and align?     | img    |
| Bulleted List   | Block element list                 | ul     | 
| Numbered List   | Block element list                 | ol     |  


# Text Sizes
| Figma                                       | Tailwind | Note                              | Orig TW |
| -------------------------------------- | -------- | -------------------------------------- | ------- |
| Desktop: XXL, Type Gotham Black 70     | 7xl      | Not Used                               | 72px    |
| Desktop: XL, Typeface Gotham Black 50  | 6xl      | Hero                                   | 60px    |
| Desktop: L, Typeface Gotham Black 45   | 5xl      | Typography H1, TitleText lg, CTA Title | 48px    |
| Desktop: M, Typeface Gotham Bold 40    | 4xl      | TitleText md                           | 36px    |
| Desktop: S, Typeface Gotham Bold 35    | 3xl      | Typography H2, IconCard Title          | 30px    |
| Desktop: XS, Typeface Gotham Bold 24   | 2xl      | Typography H3, ImageCard Title         | 24px    |
| Desktop: XXS, Typeface Gotham Black 20 | xl       | Not Used                               | 20px    |
| Desktop: SPECIAL Wikid Grid 35         |          | SVG only                               |         |
| Mobile: XXL, Typeface Gotham Bold 40   |          |                                        |         |
| Mobile: XL, Typeface Gotham Black 32   | -[32px]  |                                        |         |
| Mobile: L, Typeface Gotham Black 30    | -[30px]  |                                        |         |
| Mobile: M, Typeface Gotham Bold 25     | -[25px]  |                                        |         |
| Mobile: S, Typeface Gotham Bold 22     | -[22px]  |                                        |         |
| Mobile: XS, Typeface Gotham Black 15   | -[15px]  |                                        |         |
| Mobile: XXS, Typeface gotham Black 12  | -[12px]  |                                        |         |
| Mobile: SPECIAL WIKID GRIT 20          |          |                                        |         |
| Body: Large Gotham 18                  | lg       |                                        | 18px    |
| Body: Regular Gotham 16                | base     |                                        | 16px    |
| Body: Small Gotham 15                  | sm       |                                        | 14px    |
| Body: Tiny Gotham 12                   | xs       |                                        | 12px    |
    

    
Spacings

| Tailwind    | Spec |
| -------- ---| ---- |
| 1           | 4px  | 
| 1.5         | 6px  |
| 3           | 12px |
| 4           | 16px |
| 6           | 24px |
| 8           | 32px |
| 10          | 40px |
| 16 is 64px  | 72px |
| 20          | 80px |


Text
  // The text color is dictated by the block it sits in
 //  href

    -----