# les-k.github.io

My portfolio — live at **[les-k.github.io](https://les-k.github.io)**.

React 19 and Vite, built to a single inlined HTML file so the whole page is one
request. Deployed to GitHub Pages by Actions on every push to `main`.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Where the content lives

Everything on the page comes from [`src/data.js`](src/data.js) — profile, the
five fields, projects, skills, the timeline. Edit that file rather than the
components.

Two details in there worth knowing before you change them:

**`pending` on a project is a date, not a flag.** A repository that hasn't been
published yet renders as a plain card saying when it goes public, instead of a
link to a 404. Once the date passes it becomes an ordinary link on its own, so
there's nothing to remember to switch off.

**`period` values read as start dates.** "Since 2022" rather than "2022", because
a bare year makes a reader assume you did the thing for a year and stopped.

## Layout

```
src/
  data.js          all content
  components/      one per section
  index.css        design tokens + every rule
public/
  files/           resumes and CV (PDF)
  images/
```
