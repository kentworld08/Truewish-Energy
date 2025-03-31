import React from "react";
import "@/App.css";
import premium from "@/assets/images/premium.jpg";
import inspection from "@/assets/images/inspection.jpg";
import delivery from "@/assets/images/delivery.jpg";
import solarPanel from "@/assets/images/solar-panel.jpg";
import dcSolar from "@/assets/images/dc-solar.jpg";
import heiwaInverter from "@/assets/images/heiwa-series-inverter.jpg";
import heiwaiChallenger from "@/assets/images/heiwai-challenger-series-inverter.jpg";
import capacitorInverter from "@/assets/images/capacitor-inverter.jpg";
import vCapacitorInverter from "@/assets/images/48V-capacitor-inverter.jpg";
import kvaCapacitorInverter from "@/assets/images/48V-capacitor-inverter2.jpg";
import vaCapacitorInverter from "@/assets/images/96V-capacitor-inverter.jpg";
import WetCellInverterBattery from "@/assets/images/Wet-cell-inverter-battery.jpg";
import DryCellInverterBattery from "@/assets/images/Dry-cell-inverter-battery.jpg";
import LithiumBattery from "@/assets/images/Lithium-battery.jpg";

export const Technical = () => {
  return (
    <div className="technical-service-right-content  fade-in">
      <div className="service-inspection">
        <h3>STEP 01</h3>
        <h1>Inspection & Load Estimation</h1>
        <p>
          We'll tailor the perfect inverter solution based on the appliances in
          your household, your needs, and budget, with a thorough site
          inspection to ensure accuracy.
        </p>
        <img src={inspection} alt="inspection image" loading="lazy" />
      </div>
      <div className="service-inspection">
        <h3>STEP 02</h3>
        <h1>Delivery & Installation</h1>
        <p>
          After our engineer has completed the site assessment and provided an
          estimate, your Truewish Energy Service-approved installer will deliver
          and expertly install your inverter, ensuring optimal performance and
          efficiency.
        </p>
        <img src={delivery} alt="delivery image" loading="lazy" />
      </div>
      <div className="service-inspection">
        <h3>STEP 03</h3>
        <h1>Premium Service & Support</h1>
        <p>
          Our expert technical team is available Monday to Friday, from 8 AM to
          5 PM, to assist you with any needs regarding your solar products,
          inverters, batteries, and more.
        </p>
        <img src={premium} alt="premium image" loading="lazy" />
      </div>
    </div>
  );
};

export const Solar = () => {
  return (
    <div className="technical-service-right-content  fade-in">
      <div className="service-inspection">
        <h1>Solar Panel 390Watts</h1>
        <p>
          Truewish Energy PV Modules are crafted using state-of-the-art
          technology, driven by meticulous process management and quality
          assurance. Our unwavering commitment to Research & Development ensures
          that our customers receive top-tier performance, quality, and
          dependability. Moreover, our solar panel costs offer excellent value,
          particularly considering the long-term benefits they provide. Truewish
          Energy Modules serve as the cornerstone of our high-performance PV
          Energy Solutions. Built to be durable, reliable, and high-performing,
          our solar panels are available at cost-effective prices, promising
          substantial reductions in utility bills and carbon footprint. Each
          panel undergoes rigorous quality testing, is constructed with premium
          materials, and comes with an extended performance warranty.
        </p>
        <p style={{ marginTop: "40px" }}>
          Specifications for a 390W solar panel typically include:
        </p>
        <ul>
          <li>Model -GM 390 Mono PERC</li>
          <li>NOMINAL PEAK POWER(W) - 390W</li>
          <li>Vmp (V) - 42.26</li>
          <li>I mp (A) - 9.23</li>
          <li>Voc (V) - 48.7 </li>
          <li> Solar Cell / Module Unit - 72 Cell</li>
          <li> Module Efficiency - &gt; 19% </li>
          <li> Dimension (LXWXH) in mm 1960x990x35 </li>
          <li>Area - 1.94 m2 </li>
        </ul>
        <img src={solarPanel} alt="solar panel image" loading="lazy" />
      </div>
      <div className="service-benefits">
        <p>Benefits</p>
        <ul>
          <li>
            Designed to withstand the harshest weather conditions, including
            rain and snow.
          </li>
          <li>
            Top-tier MONO PERC solar cells featuring outstanding conversion
            efficiency, maximizing electricity generation from sunlight.
          </li>
          <li>
            Robust low iron tempered glass with an anti-reflective coating
            enhances efficiency by capturing sunlight effectively.
          </li>
          <li>
            Quick-curing, highly reflective, and UV-enhanced EVA encapsulation
            boosts durability and performance.
          </li>
          <li>Robust yet lightweight aluminum alloy frame </li>
          <li>
            {" "}
            Truewish Energy Panels incorporate a low-temperature coefficient to
            prevent efficiency decline in elevated temperatures.
          </li>
        </ul>
      </div>

      <div className="service-inspection">
        <h1>DC Solar System</h1>
        <p>
          The Truewish Energy DC Home Lighting System offers an innovative
          lighting solution for households, particularly in rural areas lacking
          reliable grid power. Additionally, the Truewish Energy Home Lighting
          System serves as an independent solution for urban residences and city
          dwellers aiming to lower their electricity costs and embrace
          intelligent energy-saving practices.
        </p>
        <img src={dcSolar} alt="delivery image" loading="lazy" />
      </div>
      <div className="service-product-info">
        <p>Product Information</p>
        <ul>
          <li>
            Power Catcher (30A Solar Charge Controller) maximum power point
            tracking technology allows the controller to track the maximum power
            point of solar panels even in a complex environment. Compared with
            the traditional 30 Amp Solar Charge Controller tracking technology,
            it boasts faster response speed and higher tracking efficiency.
          </li>
          <li>
            A built-in maximum power point tracking (MPPT) algorithm can
            significantly increase the energy utilization efficiency of the a
            photovoltaic system, which is about 15% to 20% higher than
            traditional PWM charging.
          </li>
          <li>
            It provides an active charging voltage regulation feature. At
            battery open circuit or lithium battery BMS overcharge protection,
            the controller battery terminal will output the rated charging
            voltage value.
          </li>
          <li>MPPT tracking efficiency is up to 99.9%.</li>
          <li>
            Due to advanced digital power technology, the circuit energy
            conversion efficiency is as high as 98%.
          </li>
          <li>
            Available in multiple battery types and support charging procedures
            of various types of batteries such as lithium batteries, colloidal
            battery, sealed battery, vented battery, lithium battery, etc.
          </li>
          <li>
            A current-limited charging mode is available. When the power of the
            solar panel is too large and the charging current is higher than the
            rated valve, the controller automatically reduces the charging power
            so that the solar panel can operate at the rated charging current.
          </li>
          <li>
            Support automatic identification of lead-acid battery voltage.
          </li>
          <li>
            External LCD screen or BT module can be connected for viewing of
            equipment operating data and status, and modification of 30 Amp
            Solar Charge Controller parameters is supported.
          </li>
          <li>
            Support standard Modbus protocol to meet communication needs on
            different occasions.
          </li>
          <li>
            Built-in over-temperature protection mechanism ensures that when the
            temperature exceeds the set value of the device, the charging
            current decreases linearly with the temperature, thereby reducing
            the temperature rise of the controller and avoiding high-temperature
            damage.
          </li>
          <li>
            Temperature compensation and automatic adjustment of charge and
            discharge parameters help to improve battery life.
          </li>
          <li>
            Solar panel short circuit protection, battery open circuit
            protection and TVS lightning protection, etc.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Capacity = () => {
  return (
    <div className="technical-service-right-content  fade-in">
      <div className="service-inspection">
        <h1>Heiwa Series Inverter</h1>
        <p>
          The Heiwa Series Inverter is a cutting-edge solar power inverter
          designed for residential and commercial applications. It boasts
          advanced features and technology to maximize energy production and
          system efficiency. Key features of the Heiwa Series Inverter include:
        </p>
        <ol>
          <li>
            High Efficiency: The inverter is engineered to deliver high
            conversion efficiency, ensuring maximum power output from solar
            panels.
          </li>
          <li>
            Robust Design: Built with durable components and materials, the
            Heiwa Series Inverter offers long-term reliability and performance.
          </li>
          <li>
            Smart Monitoring: The inverter is equipped with smart monitoring
            capabilities, allowing users to track system performance and energy
            production in real-time.
          </li>
          <li>
            Grid Compatibility: Designed to seamlessly integrate with the grid,
            the Heiwa Series Inverter ensures smooth operation and grid
            stability.
          </li>
          <li>
            User-Friendly Interface: The inverter features an intuitive
            interface for easy installation, configuration, and monitoring.
          </li>
          <li>
            Safety Features: With built-in safety features such as overvoltage
            and overload protection, the Heiwa Series Inverter prioritizes user
            safety and system protection.
          </li>
        </ol>

        <p>
          Overall, the Heiwa Series Inverter is a dependable and efficient
          solution for harnessing solar energy for residential and commercial
          use.
        </p>
        <img
          src={heiwaInverter}
          alt="heiwa-series-inverter image"
          loading="lazy"
        />
      </div>
      <div className="service-benefits">
        <p style={{ marginBottom: "40px" }}>Various type with specifications</p>
        <p>950VA / 12V</p>
        <ul>
          <li>Model-HEIWA 950VA/12V</li>
          <li>Capacity-950VA</li>
          <li>Voltage (Input) - 100 VAC - 280 VAC ± 15 VAC</li>
          <li>Max Bulb Load (Output)- 200 VAC ± 10%</li>
          <li>Maximum charging current - 15Amp </li>
          <li>Dimension (LXWXH) in CM - 38x33x21</li>
        </ul>
        <p> 1625VA / 12V</p>
        <ul>
          <li>Model - HEIWA 1625VA/12V</li>
          <li>Capacity - 1625VA</li>
          <li> Voltage (Input) - 100 VAC - 280 VAC ± 15 VAC</li>
          <li> Max Bulb Load (Output) - 200 VAC ± 10% </li>
          <li>Maximum charging current - 24Amp</li>
          <li>Dimension (LXWXH) in CM - 115x157.5x64.6 </li>
        </ul>
        <p>1675VA / 24V </p>
        <ul>
          <li>Model - HEIWA 1675VA/24V</li>
          <li>Capacity - 1675VA </li>
          <li>Voltage (Input) - 100 VAC - 280 VAC ± 15 VAC </li>
          <li>Max Bulb Load (Output) - 200 VAC ± 10%</li>
          <li>Maximum charging current - 17Amp </li>
          <li>Dimension (LXWXH) in CM - 49.5x42x27 </li>
        </ul>
        <p>2050VA / 24V</p>
        <ul>
          <li>Model - HEIWA 2050VA/24</li>
          <li>Capacity - 2050VA </li>
          <li>Voltage (Input) - 100 VAC - 280 VAC ± 15 VAC </li>
          <li>Max Bulb Load (Output) -  200 VAC ± 10% </li>
          <li>Maximum charging current - 24Amp </li>
          <li>Dimension (LXWXH) in CM - 50x41.5x26.5</li>
        </ul>
      </div>

      <div className="service-inspection">
        <h1>Heiwa iChallenger Series Inverter</h1>
        <p>
          The Heiwa iChallenger Series Inverter is an advanced solar power
          inverter designed for residential and commercial applications. It
          incorporates innovative features and cutting-edge technology to
          optimize energy production and system performance.
        </p>
        <p>Key features of the Heiwa iChallenger Series Inverter include: </p>
        <ol>
          <li>
            High Efficiency: The inverter is engineered to deliver exceptional
            conversion efficiency, maximizing power output from solar panels and
            enhancing overall system performance.
          </li>
          <li>
            Intelligent MPPT: Equipped with intelligent Maximum Power Point
            Tracking (MPPT) technology, the iChallenger Series ensures efficient
            power capture from solar panels under varying environmental
            conditions.
          </li>
          <li>
            Grid Interaction: The inverter seamlessly interacts with the grid,
            enabling users to utilize solar energy while maintaining
            connectivity to the utility grid. This allows for efficient energy
            management and grid support.
          </li>
          <li>
            Enhanced Monitoring: With advanced monitoring capabilities, users
            can easily monitor system performance, energy production, and
            consumption in real-time through intuitive interfaces and mobile
            applications.
          </li>
          <li>
            Durability and Reliability: Built with high-quality components and
            robust construction, the Heiwa iChallenger Series Inverter offers
            long-term durability and reliability, ensuring consistent operation
            and minimal maintenance requirements.
          </li>
          <li>
            Safety Features: The inverter incorporates comprehensive safety
            features such as overvoltage protection, overcurrent protection, and
            short-circuit protection to safeguard both the system and users.
          </li>
        </ol>
        <p>
          Overall, the Heiwa iChallenger Series Inverter provides a reliable and
          efficient solution for harnessing solar energy, offering exceptional
          performance and user-friendly operation for residential and commercial
          solar installations.
        </p>
        <img
          src={heiwaiChallenger}
          alt="heiwai-challenger-series-inverter image"
          loading="lazy"
        />
      </div>
      <div className="service-benefits">
        <p style={{ marginBottom: "40px" }}>Various type with specifications</p>
        <p>1100VA / 12V</p>
        <ul>
          <li>Capacity-1100VA</li>
          <li>Voltage (Input) - 100 VAC - 280 VAC ± 15 </li>
          <li>Maximum charging current - 15Amp </li>
          <li>Gross Weight(in kg) - 9.15kg </li>
          <li>Dimension (LXWXH) in CM - 32.5x34x18.5</li>
        </ul>
        <p> 1500VA / 24V</p>
        <ul>
          <li>Capacity-1500VA</li>
          <li>Voltage (Input) - 100 VAC - 280 VAC ± 15 </li>
          <li>Maximum charging current - 15Amp </li>
          <li>Gross Weight(in kg) - 16.31kg </li>
          <li>Dimension (LXWXH) in CM - 43.99x41.3x27</li>
        </ul>
      </div>
      <div className="service-inspection">
        <h1>2.5KVA capacitor inverter</h1>
        <p>
          2.5KVA capacitor inverter provides a reliable and efficient solution
          for powering electrical loads in off-grid or grid-tied solar energy
          systems, offering stable and uninterrupted power supply for various
          residential or commercial applications.
        </p>
        <img
          src={capacitorInverter}
          alt="capacitor-inverter image"
          loading="lazy"
        />
      </div>

      <div className="service-benefits">
        <p>Key features of a 2.5KVA capacitor inverter may include:</p>

        <ol>
          <li>
            Power Output: A 2.5KVA capacitor inverter is capable of delivering
            up to 2.5 kilovolt-amps of power to electrical loads. This makes it
            suitable for small to medium-sized residential or commercial
            applications.
          </li>
          <li>
            Voltage Compatibility: Operating at a specific voltage, such as 48V
            or 96V, this inverter requires a compatible battery bank to function
            efficiently. It is important to ensure that the inverter voltage
            matches the battery bank voltage for optimal performance.
          </li>
          <li>
            Efficiency: Capacitor inverters are known for their high efficiency
            in converting DC power from solar panels or batteries into AC power
            for use in homes or businesses. This helps to minimize energy loss
            and maximize the utilization of available power sources.
          </li>
          <li>
            Durability: Many capacitor inverters are built with robust
            components and sturdy construction to ensure long-term reliability
            and performance, even in harsh environmental conditions.
          </li>
          <li>
            Safety Features: These inverters often come equipped with advanced
            safety features such as overload protection, short-circuit
            protection, overvoltage protection, and overheat protection to
            safeguard both the inverter and connected devices.
          </li>
          <li>
            Remote Monitoring: Some capacitor inverters offer remote monitoring
            capabilities, allowing users to access real-time performance data,
            adjust settings, and receive alerts or notifications remotely via
            communication interfaces such as Wi-Fi, Ethernet, or RS485.
          </li>
        </ol>
      </div>
      <div className="service-inspection">
        <h1>4.2KVA / 48V capacitor inverter</h1>
        <p>
          Capacitor inverters, such as the 4.2KVA / 48V model, offer efficient
          and reliable power conversion for medium-sized residential or
          commercial solar energy systems. With a capacity of 4.2 kilovolt-amps
          (KVA) and operating at 48 volts (V), these inverters are suitable for
          powering various household appliances, office equipment, or small
          businesses. Overall, a 4.2KVA / 48V capacitor inverter provides an
          efficient and versatile solution for powering electrical loads in
          off-grid or grid-tied solar energy systems, offering reliable
          performance and flexibility for various applications.
        </p>
        <img
          src={vCapacitorInverter}
          alt="48V-capacitor-inverter image"
          loading="lazy"
        />
      </div>

      <div className="service-benefits">
        <p>Key features of a 4.2KVA / 48V capacitor inverter may include: </p>

        <ol>
          <li>
            High Efficiency: Capacitor inverters are known for their high
            efficiency, converting DC power from solar panels into AC power for
            use in homes or businesses with minimal energy loss.
          </li>
          <li>
            Robust Design: These inverters are typically built with durable
            components and sturdy construction, ensuring reliability and
            longevity even in challenging environmental conditions.
          </li>
          <li>
            Grid Interaction: Some capacitor inverters may have grid-tie
            capabilities, allowing them to synchronize with the utility grid to
            supplement energy needs or feed excess power back into the grid.
          </li>
          <li>
            Battery Compatibility: Operating at 48 volts, the 4.2KVA / 48V
            capacitor inverter is compatible with a variety of battery types,
            including lead-acid, lithium-ion, or gel batteries, for energy
            storage and backup power.
          </li>
          <li>
            User-Friendly Interface: Many capacitor inverters feature
            user-friendly interfaces with LCD displays or digital screens,
            allowing users to monitor system performance, settings, and energy
            consumption easily.
          </li>
          <li>
            Safety Features: Capacitor inverters often incorporate safety
            features such as overload protection, short-circuit protection, and
            overvoltage protection to ensure safe and reliable operation.
          </li>
        </ol>
      </div>
      <div className="service-inspection">
        <h1>5KVA / 96V capacitor inverter</h1>
        <p>
          The 5KVA / 96V capacitor inverter is a robust and efficient power
          conversion device designed for medium to large-scale residential or
          commercial solar energy systems. With a capacity of 5 kilovolt-amps
          (KVA) and operating at 96 volts (V), these inverters are capable of
          delivering reliable and stable AC power for a wide range of electrical
          loads. A 5KVA / 96V capacitor inverter offers a reliable, efficient,
          and flexible solution for powering electrical loads in off-grid or
          grid-tied solar energy systems, providing users with stable and
          uninterrupted power supply for their homes or businesses.
        </p>
        <img
          src={vaCapacitorInverter}
          alt="96V-capacitor-inverter image"
          loading="lazy"
        />
      </div>

      <div className="service-benefits">
        <p>Key features of a 5KVA / 96V capacitor inverter may include: </p>

        <ol>
          <li>
            High Power Output: The 5KVA rating of the inverter allows it to
            handle significant electrical loads, making it suitable for powering
            multiple appliances, lighting systems, and other equipment
            simultaneously.
          </li>
          <li>
            Dual Battery System: Operating at 96 volts, the inverter typically
            requires two 48-volt battery banks connected in series to provide
            sufficient voltage for operation. This configuration allows for
            greater energy storage capacity and flexibility.
          </li>
          <li>
            Advanced Protection Features: Capacitor inverters often incorporate
            advanced protection features such as overload protection,
            short-circuit protection, overvoltage protection, and overheat
            protection to safeguard both the inverter and connected devices from
            damage.
          </li>
          <li>
            Grid Interaction: Some capacitor inverters may offer grid-tie
            capabilities, allowing them to synchronize with the utility grid to
            supplement energy needs or export excess power back to the grid,
            thus reducing electricity costs or generating revenue through net
            metering.
          </li>
          <li>
            Remote Monitoring and Control: Many capacitor inverters can be
            monitored and controlled remotely using communication interfaces
            such as Wi-Fi, Ethernet, or RS485, enabling users to access
            real-time performance data, adjust settings, and receive alerts or
            notifications remotely.
          </li>
          <li>
            Compact and Efficient Design: Despite their high power output,
            capacitor inverters are often designed to be compact and
            space-saving, making them suitable for installation in various
            indoor or outdoor locations.
          </li>
        </ol>
      </div>
      <div className="service-inspection">
        <h1>6.5KVA / 48V capacitor inverter</h1>
        <p>
          6.5KVA / 48V capacitor inverter provides a reliable and efficient
          solution for powering electrical loads in off-grid or grid-tied solar
          energy systems, offering stable and uninterrupted power supply for
          residential or commercial applications.
        </p>
        <img
          src={kvaCapacitorInverter}
          alt="96V-capacitor-inverter image"
          loading="lazy"
        />
      </div>

      <div className="service-benefits">
        <p>Key features of a 6.5KVA / 48V capacitor inverter may include: </p>

        <ol>
          <li>
            Power Output: A 6.5KVA capacitor inverter is capable of delivering
            up to 6.5 kilovolt-amps of power to electrical loads. This makes it
            suitable for medium to large-scale residential or commercial
            applications.
          </li>
          <li>
            Voltage Compatibility: Operating at 48 volts, this inverter requires
            a 48V battery bank to function efficiently. It is compatible with
            various battery types, including lead-acid, lithium-ion, or gel
            batteries.
          </li>
          <li>
            Efficiency: Capacitor inverters are known for their high efficiency
            in converting DC power from solar panels or batteries into AC power
            for use in homes or businesses. This helps to minimize energy loss
            and maximize the utilization of available power sources.
          </li>
          <li>
            Durability: Many capacitor inverters are built with robust
            components and sturdy construction to ensure long-term reliability
            and performance, even in harsh environmental conditions.
          </li>
          <li>
            Safety Features: These inverters often come equipped with advanced
            safety features such as overload protection, short-circuit
            protection, overvoltage protection, and overheat protection to
            safeguard both the inverter and connected devices.
          </li>
          <li>
            Remote Monitoring: Some capacitor inverters offer remote monitoring
            capabilities, allowing users to access real-time performance data,
            adjust settings, and receive alerts or notifications remotely via
            communication interfaces such as Wi-Fi, Ethernet, or RS485.
          </li>
          <li>
            Grid Interaction: Depending on the model, capacitor inverters may
            offer grid-tie capabilities, enabling them to synchronize with the
            utility grid to supplement energy needs or export excess power back
            to the grid.
          </li>
        </ol>
      </div>
    </div>
  );
};

export const Batteries = () => {
  return (
    <div className="technical-service-right-content  fade-in">
      <div className="service-inspection">
        <h1>Wet cell inverter battery</h1>
        <p>
          Tubular batteries are a type of lead-acid battery that is designed
          with tubular positive plates instead of flat plates found in
          conventional lead-acid batteries.
        </p>

        <img
          src={WetCellInverterBattery}
          alt="Wet Cell Inverter Battery image"
          loading="lazy"
        />
      </div>
      <div className="service-benefits">
        <p>Key features of the Wet cell battery 12V/200AH:</p>

        <ol>
          <li>High Acid Volumes </li>
          <li>Tall Tubular Design</li>
          <li>
            Low Maintenance, very low water topping up due to special design of
            plats with selenium low antimonial alloy
          </li>
          <li>
            Spines are manufactured using state of art High-Pressure die Casting
            machine
          </li>
          <li> High Purity, corrosion-resistant </li>
          <li>
            Designed to have a life cycle over 1200 cycles at 80% DOD ( Depth of
            Discharge)
          </li>
          <li> Electrolyte Level Indicator </li>
          <li> Specially designed to support long and frequent power cuts </li>
          <li>High performance and low maintenance</li>
          <li> Designed for deep discharge</li>
          <li>Faster Recharge </li>
          <li>Longer Life </li>
          <li> An ideal companion for Genus Home UPS and Inverters</li>
        </ol>
      </div>

      <div className="service-inspection">
        <h1>Dry cell inverter battery</h1>
        <p>Mecury Battery Inverter Battery 18Mah/12V</p>

        <img
          src={DryCellInverterBattery}
          alt="Dry cell inverter battery image"
          loading="lazy"
        />
      </div>
      <div className="service-benefits">
        <p>Key features of the Mecury Dry cell Inverter Battery 18Mah/12V:</p>

        <ol>
          <li>18amps 12V Inverter batteries</li>
          <li>
            these are the best batteries for inverters and solar installations
          </li>
          <li> good performance in hot and cold atmosphere </li>
          <li>
            will last 3 or more hour when fully charged and used for optimum
            appliance load
          </li>
          <li>thick cells</li>
          <li> maintenance free </li>
          <li>Sealed batteries</li>
          <li>Reputable with high performance</li>
          <li>Long life performance</li>
          <li>Easy replacement for your UPS</li>
        </ol>
      </div>
      <div className="service-inspection">
        <h1>Lithium battery</h1>
        <p>5KWH 24v Lifepo4 Lithium Deep Cycle Solar Battery For Inverter</p>
        <img src={LithiumBattery} alt="Lithium battery image" loading="lazy" />
      </div>

      <div className="service-benefits">
        <p>Key features of a 2.5KVA capacitor inverter may include:</p>

        <ol>
          <li>
            24V 100ah / 200ah lithium ion battery for energy storage system.
          </li>
          <li>Waterproof: IP65 Protection level.</li>
          <li>Floor or Power wall Mounting.</li>
          <li>
            Support Connected in parallel model for expansion (up to 12 pieces).
          </li>
          <li>Built-in Battery management system(BMS).</li>
          <li>Built-in air switch,double protection.</li>
          <li>
            Iron Phosphate-lithium Battery Powerwall : 90% DOD, More than 6000
            cycle times.
          </li>
          <li>Long warranty period : 5 years.</li>
          <li>Convenient CAN&RS485 Communication.</li>
          <li>Model LPBF24200-M</li>
          <li>Size : 537*537*298</li>
        </ol>
      </div>
    </div>
  );
};
