# The Payoff v1 — UI Kit

High-fidelity mock of the debt-payoff product as it appears inside
Google Sheets. Chrome and atoms carried from the Workbench kit; story
and figures from `design/design_handoff_the_payoff/04` — **every number
is computed** by the 03 amortization iteration (run in node), not
invented.

Open `index.html` — it lands on **The Plan** (the hero: the debt-free
date). The four hi-fi tabs are the mockup-approval surface:

| Tab | What to judge |
|---|---|
| **The Plan** | strategy + extra inputs, the headline date block, what-if chips (+$50/+$100), payoff order with TARGET chip and below-the-line tracked mortgage, balance timeline to zero |
| **Compare** | full side-by-side (Dan's pick): both strategies' dates, interest, first win, priority orders, shared-scale timelines, the verdict line |
| **Dashboard** | KPI row (incl. the "minimums never finish" sub-line), the Kill List, this month's payments, milestones, AI insights |
| **Debts** | the registry: yellow inputs, In plan? toggle (mortgage = TRACKED), Underwater-min warning on the Visa, Balance override demo |

Locked story truths (sim-verified): two kills (Sep 2025 · Apr 2026) ·
$31,741 of $40,950 left · snowball 47 mo / $7,487 vs avalanche 46 mo /
$6,515 · first win m12 vs m27 · +$50 = 2 months sooner · saved $26,772
through the 10-yr window, minimums alone never finish.

Stubs: Start Here · Payments Log · Progress · Bank Import · _Engine.
24-palette picker wired.
