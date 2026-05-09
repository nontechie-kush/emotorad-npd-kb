# E-Bike Technical Foundations
## Motors | Batteries | BMS | Drivetrain | Frame
**Last Updated:** 2026-05-08

---

## HOW AN E-BIKE WORKS — THE SYSTEM VIEW

An e-bike is fundamentally a **power-assist system** layered on a bicycle. Five components must work together:

1. **Motor** — converts electrical energy into rotational force
2. **Battery** — stores electrical energy (the fuel tank)
3. **BMS** (Battery Management System) — protects and manages the battery
4. **Controller** — interprets rider input + motor/battery state, modulates power delivery
5. **Sensor** — tells the controller how much assistance to provide (torque sensor or cadence sensor)

The quality of the interaction between these five components defines how an e-bike feels to ride — whether it feels natural or clunky, powerful or weak, safe or scary.

---

## SECTION 1: MOTORS

### Motor Architecture Types

#### 1. Hub Motor (Rear or Front Wheel)
The motor is built into the hub of a wheel. When powered, it spins the wheel directly.

| Spec | Typical Value |
|------|--------------|
| Torque | 30–80 Nm |
| Weight | 2.5–4.5 kg (integrated into wheel) |
| Position | Rear hub (most common) or front hub |
| Cost | Low — $40–$150 for mass-market units |

**Advantages:**
- Simple installation — bolt on like a wheel
- Cheaper to manufacture and purchase
- No interaction with gearing — motor is independent
- Easy maintenance (fewer moving parts in drivetrain)
- Ideal for flat terrain, city use, budget builds

**Disadvantages:**
- Cannot use bike gears to multiply torque — climbs suffer
- Adds unsprung weight to wheel — affects handling
- Less natural "feel" — power doesn't flow through pedals
- Rear flat tire requires full motor removal — major hassle

**When to use:** Budget builds, flat terrain, city commuters, when cost is the priority

**Notable hub motor suppliers:**
- **Bafang** (China) — BPM series rear hub, widely used in budget e-bikes
- **Mahle X20** (Germany) — ultra-light rear hub (0.95 kg!), used by Orbea Gain; premium stealth
- **Shengyi** (China) — budget hub motors for mass market
- **Generic Chinese** — flooded market with 250–500W units

#### 2. Mid-Drive Motor
The motor sits at the bottom bracket (crank area) and drives the chain/drivetrain. Power flows through the bike's gears.

| Spec | Typical Value |
|------|--------------|
| Torque | 50–120 Nm |
| Weight | 2.0–3.5 kg (motor unit only) |
| Position | Bottom bracket, center of bike |
| Cost | $150–$500 for quality units |

**Advantages:**
- Uses the bike's gears — climbs much better
- Better weight distribution (center of bike)
- More natural riding feel — power through pedals
- Works with all rear wheel drivetrains
- Easier flat tire repair (rear wheel unchanged)

**Disadvantages:**
- More complex integration — frame must be designed around it
- More expensive
- Higher chain/drivetrain wear (more torque through gears)
- Heavier than hub on fully integrated basis

**When to use:** Performance, gravel, mountain, trekking, any terrain variety, premium product positioning

**Key mid-drive motor comparison:**

| Motor | Brand | Torque | Weight | Best For | Approx. OEM Cost |
|-------|-------|--------|--------|----------|-----------------|
| Performance CX Gen4 | Bosch | 85 Nm | 2.9 kg | Max power, touring, cargo | ~$350–450 |
| Performance SX | Bosch | 55 Nm | 2.05 kg | Light, agile, gravel | ~$300–380 |
| EP801RS-Gravel | Shimano | 85 Nm | 2.6 kg | Gravel, trekking premium | ~$300–400 |
| EP600RS-Gravel | Shimano | 60 Nm | 2.4 kg | Gravel, trekking mid | ~$220–300 |
| E6100 | Shimano | 60 Nm | 2.88 kg | Urban commuter | ~$180–250 |
| Turbo SL 1.2 | Specialized | 50 Nm | 1.95 kg | Stealth road/gravel | Proprietary |
| Ride 60 | Fazua (Bosch) | 55 Nm | 1.96 kg | Ultra-light, stealth | ~$300–400 |
| M600 | Bafang | 120 Nm | 2.9 kg | Budget, high torque | **~$80–150** |
| M500 | Bafang | 95 Nm | 2.85 kg | Budget mid-drive | **~$70–120** |

**The Bafang cost advantage is massive.** A Bafang M600 at $80–150 vs. a Bosch CX at $350–450. The question is whether the market segment justifies the premium motor cost.

### Torque Sensor vs. Cadence Sensor
This is the single most important factor in how an e-bike *feels* to ride:

| | Torque Sensor | Cadence Sensor |
|--|--------------|----------------|
| How it works | Measures actual force applied to pedals | Detects if pedals are rotating |
| Assistance feel | **Proportional — natural, smooth** | On/off — can feel jerky |
| Response | Instant, responsive to effort | Slight lag |
| Cost | Higher ($30–80 more per unit) | Lower |
| Battery efficiency | Better — only helps when you work | Less efficient — assists constantly |
| Premium segment | Standard | Rare |
| Budget segment | Rare | Standard |

**Rule:** Any product above €2,000 / ₹80,000 should have a torque sensor. Non-negotiable for the feel of the product.

---

## SECTION 2: BATTERIES

### Battery Pack Structure
An e-bike battery is a pack of individual lithium-ion cells connected in series (to increase voltage) and parallel (to increase capacity). A typical e-bike battery:
- **Voltage:** 36V or 48V nominal (most common)
- **Capacity:** 300–750 Wh
- **Cells:** 18650 cylindrical (most common) or 21700 (newer, higher density) or prismatic

### Cell Chemistry Comparison: NMC vs LFP

| Property | NMC (Nickel-Manganese-Cobalt) | LFP (Lithium Iron Phosphate) |
|----------|-------------------------------|------------------------------|
| Energy density | **150–250 Wh/kg** (higher) | 90–160 Wh/kg (lower) |
| Cycle life | 1,000–2,000 cycles | **2,000–5,000 cycles** |
| Safety | Thermal runaway at ~200°C | **Stable to ~400°C — much safer** |
| Cost | Higher (contains Co, Ni) | **Lower (Fe, phosphate are cheap)** |
| Weight | Lighter for same capacity | Heavier for same capacity |
| Cold performance | Better | Degrades more in cold |
| Dominant use | Premium e-bikes, most European | Growing fast; dominant in Chinese e-bikes |

**2025 market shift:** LFP became the dominant EV battery chemistry globally in 2025 (48% demand growth). For e-bikes, LFP is ideal for:
- B2B/fleet applications (cycle life matters more than weight)
- Budget/mid-range (cost advantage)
- India/hot climates (safety advantage)

NMC remains preferred for:
- Premium European e-bikes where weight matters
- Performance gravel/mountain bikes (lighter for same range)

**India regulatory note:** PM E-Drive subsidy requires LFP or NMC — lead-acid excluded.

### Battery Pack Design Options

| Design | Description | Used In | Weight Impact |
|--------|-------------|---------|--------------|
| **Downtube integrated** | Battery hidden inside down tube | Premium (Specialized, Orbea Gain) | Minimal — part of frame |
| **Frame integrated** | Battery forms part of frame shell | Premium-mid (Orbea Denna, Canyon) | Low — engineered in |
| **Rear rack mounted** | Battery sits on rear carrier | Commuter, utility | Adds weight high up |
| **Bottle cage style** | Removable range extender | Some mid-drives (Fazua) | Modular |
| **External clip-on** | Aftermarket, strapped to frame | Budget | Looks cheap |

**Design principle:** The more integrated, the better the ride quality (lower center of gravity) and the better the aesthetics. Integration adds design complexity and tooling cost.

### Battery Capacity vs Range (Practical Guide)
| Capacity | Typical Range (varied terrain) | Typical Weight | Segment |
|---------|-------------------------------|----------------|---------|
| 250–300 Wh | 40–70 km | 1.8–2.3 kg | Ultra-light/stealth road |
| 350–400 Wh | 60–100 km | 2.2–2.8 kg | Mainstream gravel/commuter |
| 420–500 Wh | 80–130 km | 2.8–3.5 kg | Trekking, touring, gravel |
| 600–750 Wh | 120–200 km | 3.5–5 kg | Cargo, touring, range-focused |

---

## SECTION 3: BATTERY MANAGEMENT SYSTEM (BMS)

The BMS is the electronic brain of the battery. It monitors and protects every cell in the pack.

### Core Functions
1. **Cell voltage monitoring** — ensures every cell stays between 3.0V (discharged) and 4.2V (fully charged)
2. **Temperature monitoring** — cuts power if pack exceeds safe temperature (-20°C to +70°C range)
3. **Current monitoring** — prevents overcurrent in charging and discharging
4. **State of Charge (SoC) estimation** — calculates % charge remaining (shown to rider on display)
5. **State of Health (SoH) estimation** — tracks pack degradation over time
6. **Cell balancing** — equalizes charge across all cells to prevent weak cell dragging down the pack

### Protection Mechanisms
| Risk | BMS Response |
|------|-------------|
| Cell overcharge (>4.2V) | Cuts charging circuit |
| Cell over-discharge (<3.0V) | Cuts discharge circuit |
| Over-temperature | Reduces power or shuts down |
| Short circuit | Immediately disconnects pack |
| Overcurrent | Current limiting or shutdown |
| Cell imbalance | Active or passive balancing |

### BMS Architectures
- **Passive balancing** — burns off excess charge from full cells as heat. Simple, cheaper.
- **Active balancing** — transfers energy from full cells to less-full cells. More efficient, more expensive.
- **Smart BMS** — Bluetooth-connected, app-controlled, real-time data to user/fleet manager. Standard in premium brands. Essential for B2B fleet use.

### Quality Signal for Buyers
A BMS failure is the #1 cause of e-bike battery fires. Quality BMS is non-negotiable. Signs of quality:
- Grade A cells (Samsung, LG, Panasonic, CATL, EVE — not generic)
- Rated IP56 or higher (water resistance)
- UL 2849 certified (USA) or UN 38.3 certified (shipping standard)
- Active balancing
- Documented temperature range

---

## SECTION 4: DRIVETRAIN & GEARING

### Groupsets — What's on the Bike

| Brand | Range | Speed | Best For | Price Position |
|-------|-------|-------|---------|---------------|
| **Shimano Cues** | Entry | 1x10/11 | Budget e-bikes | Low |
| **Shimano GRX 600** | Mid | 1x11/2x11 | Gravel mid-range | Mid |
| **Shimano GRX 800** | Upper mid | 1x11/2x12 | Premium gravel | Mid-high |
| **Shimano GRX 810 Di2** | Electronic | 1x11 | Premium gravel electronic | High |
| **Shimano XT/XTR** | Mountain | 1x12 | E-MTB | High |
| **SRAM GX Eagle** | Mountain | 1x12 | E-MTB | Mid-high |
| **SRAM Force AXS** | Road | 2x12 | High-end road | Very high |

### Gearing for E-Bikes Specifically
- E-bikes put significantly more torque through the drivetrain than regular bikes
- Chains wear faster (replace every 1,500–2,000 km vs. 2,500+ on a regular bike)
- Cassettes and chainrings wear faster — budget for this in cost modeling
- **1x drivetrains** (single front chainring) are dominant in modern e-gravel and e-MTB — simpler, less to go wrong
- **Belt drive** (Gates Carbon Drive) — increasingly used on premium urban e-bikes; maintenance-free, lasts 3x longer than chain; incompatible with most multi-speed derailleurs

### Tire Considerations for Gravel E-Bikes
| Tire Width | Application | Speed Trade-off |
|------------|-------------|-----------------|
| 28–32mm | Road/light gravel | Fast on road, limited off-road |
| 35–40mm | Versatile gravel | Best of both worlds |
| 40–50mm | Full gravel/light MTB | Off-road capable, slower on road |
| 50mm+ | All-terrain | Off-road priority |

**For an India-adapted gravel e-bike:** 38–45mm width is the sweet spot — handles India's mixed road surfaces, cobblestones, broken tarmac, and occasional dirt.

---

## SECTION 5: FRAME & MATERIALS

| Material | Weight | Cost | Compliance | Best For |
|----------|--------|------|------------|---------|
| 6061 Aluminium | ~1.8–2.4 kg frame | Low | Good (some flex) | Mass market, workhorse |
| 7005 Aluminium | ~1.6–2.0 kg frame | Low-mid | Less compliance | Stiffer, performance |
| **Hydroformed aluminium** | ~1.4–1.8 kg | Mid | Better with shaping | Premium-mid; allows complex tube shapes for integration |
| Chromoly steel | ~2.5–3.5 kg | Low | **Excellent** | Touring, cargo, durability |
| Carbon fibre | ~0.8–1.4 kg | Very high | Good (tunable) | Ultra-premium |
| Titanium | ~1.2–1.6 kg | Very high | Excellent | Niche luxury |

**For e-motorad's target segments:**
- **Premium gravel (Europe):** Hydroformed aluminium (doable at €3,000–5,000) or carbon (€5,000+)
- **Mid-premium (India):** Hydroformed aluminium — weight, cost, integration balance
- **B2B fleet (India):** 6061 aluminium — durability, repairability, cost

### IP Rating (Water & Dust Resistance)
All e-bike components need IP rating for real-world use:
- **Motor:** IP65 minimum (dust-tight, water jets)
- **Battery:** IP65–IP67 (submersion capable for IP67)
- **Controller/Display:** IP65
- **Connectors:** IP67 or higher — weakest point in most systems

---

## QUICK DECISION MATRIX FOR PRODUCT ARCHITECTURE

| Parameter | Budget Segment | Mid-Premium | Premium |
|-----------|---------------|-------------|---------|
| Motor type | Hub (rear) | Mid-drive | Mid-drive |
| Motor brand | Bafang/generic | Bafang M600 | Shimano EP601/Bosch SX |
| Sensor | Cadence | Torque | Torque |
| Battery size | 250–350 Wh | 350–500 Wh | 420–500 Wh |
| Cell chemistry | LFP | LFP or NMC | NMC (weight) |
| Integration | External/rack | Frame-in | Full downtube integration |
| Frame | 6061 Al | Hydroformed Al | Hydroformed Al / Carbon |
| Drivetrain | Shimano Cues | Shimano GRX 600 | Shimano GRX 800 / Di2 |
| Tires | 28–35mm | 35–45mm | 38–47mm |
| Display | Basic LED | Color LCD | Minimal/stealth LED |
| Target price (Europe) | €1,500–2,500 | €2,500–4,500 | €4,500–9,000 |
| Target price (India) | ₹30,000–60,000 | ₹60,000–1,20,000 | ₹1,20,000+ |
