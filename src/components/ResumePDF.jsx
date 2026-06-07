import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const C = {
  blue: '#2563eb',
  black: '#0f172a',
  dark: '#1e293b',
  body: '#475569',
  muted: '#94a3b8',
  light: '#e2e8f0',
  sidebar: '#f1f5f9',
  white: '#ffffff',
};

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: C.white,
    flexDirection: 'column',
    fontSize: 9,
  },
  header: {
    paddingHorizontal: 34,
    paddingTop: 26,
    paddingBottom: 18,
    borderBottom: `3pt solid ${C.blue}`,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: C.black, letterSpacing: -0.4, lineHeight: 1 },
  nameAccent: { color: C.blue },
  subtitle: { fontSize: 10, color: C.body, marginTop: 4 },
  contactBlock: { textAlign: 'right', fontSize: 8, color: C.muted, lineHeight: 1.85 },
  columns: { flexDirection: 'row', flex: 1 },
  sidebar: { width: '30%', backgroundColor: C.sidebar, paddingHorizontal: 17, paddingTop: 20, paddingBottom: 20, borderRight: `1pt solid ${C.light}` },
  main: { flex: 1, paddingHorizontal: 22, paddingTop: 20, paddingBottom: 20 },
  sideTitle: { fontSize: 6.5, fontFamily: 'Helvetica-Bold', color: C.blue, textTransform: 'uppercase', letterSpacing: 0.9, paddingBottom: 4, marginBottom: 8, borderBottom: `0.75pt solid ${C.light}` },
  mainTitle: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: C.blue, textTransform: 'uppercase', letterSpacing: 0.9, paddingBottom: 4, marginBottom: 9, borderBottom: `1pt solid ${C.light}` },
  sideSection: { marginBottom: 15 },
  mainSection: { marginBottom: 13 },
  skillGroup: { marginBottom: 7 },
  skillLabel: { fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: C.dark, marginBottom: 2 },
  skillText: { fontSize: 8, color: C.body, lineHeight: 1.65 },
  schoolName: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: C.dark },
  schoolProgram: { fontSize: 8, color: C.body, marginTop: 1, lineHeight: 1.5 },
  schoolBadge: { fontSize: 7.5, color: C.blue, marginTop: 2 },
  schoolDivider: { borderBottom: `0.5pt solid ${C.light}`, marginVertical: 7 },
  summaryText: { fontSize: 8.5, color: C.body, lineHeight: 1.75 },
  expItem: { marginBottom: 11 },
  expRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 },
  expRole: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: C.dark },
  expPeriod: { fontSize: 7.5, color: C.muted },
  expType: { fontSize: 7.5, color: C.muted, marginBottom: 4 },
  bullet: { flexDirection: 'row', marginBottom: 3 },
  bulletMark: { width: 10, fontSize: 8.5, color: C.blue, paddingTop: 0.5 },
  bulletBody: { flex: 1, fontSize: 8.5, color: C.body, lineHeight: 1.6 },
  projectItem: { marginBottom: 7 },
  projectRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1.5 },
  projectName: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: C.dark },
  projectTags: { fontSize: 7.5, color: C.muted },
  projectDesc: { fontSize: 8.5, color: C.body, lineHeight: 1.55 },
});

function Bullet({ children }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletMark}>▸</Text>
      <Text style={s.bulletBody}>{children}</Text>
    </View>
  );
}

function Project({ name, tags, children }) {
  return (
    <View style={s.projectItem}>
      <View style={s.projectRow}>
        <Text style={s.projectName}>{name}</Text>
        <Text style={s.projectTags}>{tags}</Text>
      </View>
      <Text style={s.projectDesc}>{children}</Text>
    </View>
  );
}

export function ResumePDF() {
  return (
    <Document title="Joseph Butler — Resume">
      <Page size="LETTER" style={s.page}>

        <View style={s.header}>
          <View>
            <Text style={s.name}>Joseph <Text style={s.nameAccent}>Butler</Text></Text>
            <Text style={s.subtitle}>Junior Software Developer  ·  Software Development Student</Text>
          </View>
          <View style={s.contactBlock}>
            <Text>jbutler0523@icloud.com</Text>
            <Text>217-331-4003</Text>
            <Text>linkedin.com/in/joseph-butler-5357b1406</Text>
            <Text>github.com/Jbutler23-ai</Text>
            <Text>Indiana, USA</Text>
          </View>
        </View>

        <View style={s.columns}>
          <View style={s.sidebar}>
            <View style={s.sideSection}>
              <Text style={s.sideTitle}>Skills</Text>
              <View style={s.skillGroup}><Text style={s.skillLabel}>Languages</Text><Text style={s.skillText}>Python · JavaScript · SQL</Text></View>
              <View style={s.skillGroup}><Text style={s.skillLabel}>Frameworks</Text><Text style={s.skillText}>React · React Native</Text></View>
              <View style={s.skillGroup}><Text style={s.skillLabel}>Concepts</Text><Text style={s.skillText}>REST APIs · Responsive Design{'\n'}Debugging · Project Planning</Text></View>
              <View style={s.skillGroup}><Text style={s.skillLabel}>Tools</Text><Text style={s.skillText}>GitHub · VS Code{'\n'}Browser DevTools</Text></View>
              <View style={s.skillGroup}><Text style={s.skillLabel}>Other</Text><Text style={s.skillText}>Data Annotation{'\n'}Written Evaluation{'\n'}Problem Solving</Text></View>
            </View>
            <View style={s.sideSection}>
              <Text style={s.sideTitle}>Education</Text>
              <Text style={s.schoolName}>Ivy Tech Community College</Text>
              <Text style={s.schoolProgram}>Software Development</Text>
              <Text style={s.schoolBadge}>Current</Text>
              <View style={s.schoolDivider} />
              <Text style={[s.schoolName, { color: C.muted }]}>Indiana University Southeast</Text>
              <Text style={s.schoolProgram}>Software Engineering</Text>
              <Text style={[s.schoolBadge, { color: C.muted }]}>Planned Continuation</Text>
            </View>
          </View>

          <View style={s.main}>
            <View style={s.mainSection}>
              <Text style={s.mainTitle}>Summary</Text>
              <Text style={s.summaryText}>
                Junior developer who has shipped web apps, mobile apps, CLI tools, and a VR game played
                over 577,000 times. Builds with Python, JavaScript, React, and React Native. Has professional
                experience evaluating technical work against precise standards. Studying at Ivy Tech,
                continuing at Indiana University Southeast. Actively seeking first professional role.
              </Text>
            </View>

            <View style={s.mainSection}>
              <Text style={s.mainTitle}>Experience</Text>

              <View style={s.expItem}>
                <View style={s.expRow}>
                  <Text style={s.expRole}>VR Game Creator — Rec Room</Text>
                  <Text style={s.expPeriod}>2021 – 2023</Text>
                </View>
                <Text style={s.expType}>Independent</Text>
                <Bullet>Grew a self-published VR game to 577,000+ organic plays by iterating on level design, challenge balance, and player flow using observed in-game behavior as feedback.</Bullet>
                <Bullet>Shipped multiple interactive environments from concept to live audience by planning layouts, writing game logic, and refining each experience through structured playtesting.</Bullet>
              </View>

              <View style={s.expItem}>
                <View style={s.expRow}>
                  <Text style={s.expRole}>AI Engineer</Text>
                  <Text style={s.expPeriod}>Apr 2025 – Present</Text>
                </View>
                <Text style={s.expType}>Contract</Text>
                <Bullet>Sustained high accuracy across thousands of reviewed AI model responses by systematically applying rubric frameworks and identifying recurring error patterns before submission.</Bullet>
                <Bullet>Kept quality consistent under high-volume conditions by adjusting review focus based on observed error trends, reducing time spent on resubmissions.</Bullet>
              </View>

              <View style={s.expItem}>
                <View style={s.expRow}>
                  <Text style={s.expRole}>Software Development Projects</Text>
                  <Text style={s.expPeriod}>2023 – Present</Text>
                </View>
                <Text style={s.expType}>Personal</Text>
                <Bullet>Built 5+ working applications across web, mobile, desktop, and CLI by applying Python, JavaScript, React, and React Native to solve specific, real-world user problems.</Bullet>
                <Bullet>Improved code reliability and debug speed by adopting consistent component structure, modular design patterns, and step-by-step isolation testing on each project.</Bullet>
              </View>
            </View>

            <View style={s.mainSection}>
              <Text style={s.mainTitle}>Projects</Text>
              <Project name="ShiftGuard" tags="Python · CLI">Parses two CSV files — employee availability and a weekly schedule — and reports every conflict clearly. Built to solve a real scheduling problem for small teams.</Project>
              <Project name="Plant Identification App" tags="React Native · Mobile">Mobile app concept for identifying plants and viewing care info. Focused on clean navigation and practical UI decisions that reduce friction for the user.</Project>
              <Project name="PixView" tags="Python · Tkinter">Minimal desktop image viewer built to practice GUI layout, app structure, and keeping interfaces simple and out of the way.</Project>
              <Project name="ClearMyTabs" tags="JavaScript · Chrome Extension">Browser extension concept targeting tab overload — groups tabs, saves sessions, and reduces the cognitive cost of managing too many open pages.</Project>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
