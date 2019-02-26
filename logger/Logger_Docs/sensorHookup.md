# How to hook up sensors
Any time we get a new sensor, we should learn how to hook that sensor up, and then DOCUMENT that process here so that we wont have to re-learn the process every time we want to hook up that sensor.

#### Format for adding a new sensor

### Sensor Type
- Names of sensors that fall into this category
- Brief description of the sensor type
- Common color of wires used / methodoloogy of hooking up the sensor type. If their is multiple configurations, start this section with a configuartions header bullet and then list the configurations
- Program configuration info
- "Gotcha" information

# Shop sensor types
### Temperature probes
- NTCs, PTCs, PT1000s, PT100s, etc.
- As the name suggests, these sensors are all used to measure a range of temperature using a temperature sensitive resister.
- Gotchas!
  - The M172 is not compatible with a PT100. You have to use a 4-20ma transducer for these to work. This converts the signal to 4-20ma. Go to the 4-20ma section to continue.
  - NEVER hook a temp sensor directly to the 24V signal! You could easily destroy the sensor and potentially damage the controller.
- Wiring instructions
  - 2 wires: Hook one to ground and one to data input
  - 3 wires: Should have 2 one color and 1 of another color. Hook one of one color to ground, and the other to data input.

### 4-20ma Signals

### 0-10v Signals

### 