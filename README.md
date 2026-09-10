# GreenAI Robotics

GreenAI Robotics is a research prototype developed for exploring the environmental impact of AI and future robotics technologies.


The application uses deterministic calculations and synthetic demonstration data. 

## Features

The prototype provides six interactive research views:

1. **Lifecycle Dashboard**  
   Overview of energy demand, carbon emissions, water consumption, and impact per robot-task.

2. **Life Cycle Model**  
   Models environmental impacts across the complete AI lifecycle.

3. **Hotspot Analysis**  
   Identifies the lifecycle stages contributing most to environmental impact.

4. **Deployment Scenarios**  
   Compares and ranks four AI deployment architectures:
   - Cloud-only
   - Edge-only
   - Hybrid
   - Shared Foundation Model

5. **Rebound Effects**  
   Demonstrates how increased AI usage can partially or completely offset efficiency improvements.

6. **Methodology**  
   Documents the functional unit, system boundary, inventory assumptions, impact categories, sensitivity analysis, formulas, and limitations.

## Lifecycle Stages

The model includes:

- Data preparation
- Model training
- Hardware manufacturing
- Storage and data transfer
- Robot sensing
- AI inference
- Cooling
- Electricity consumption
- End-of-life treatment

## Model Inputs

Users can adjust:

- Model size
- GPU power
- Training duration
- Number of robots
- Inference frequency
- Hardware lifetime
- Renewable-energy share
- Deployment architecture

All results update immediately when an input changes.

## Impact Indicators

The prototype calculates:

- Energy demand in kWh
- Climate impact in kg CO₂e
- Water consumption in liters
- Climate impact per robot-task
- Lifecycle-stage contributions
- Scenario rankings
- Parameter sensitivity
- Rebound-effect outcomes


