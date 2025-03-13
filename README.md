# Swimming Analysis Demo

This repository hosts a **GitHub Pages** site demonstrating the outputs of a **pose estimation-based swimming analysis system integrating biomechanics**. The system processes swimming videos and generates various outputs, including annotated videos, analytical data in Excel format, and interactive reports.

## 📌 Outputs
### 1️⃣ Annotated Video 🎥
- A processed version of the input swimming video.
- Overlaid **joint positions** and **angles**.
- Used for **visual analysis of swimming technique**.

### 2️⃣ Excel Output 📊
A multi-sheet Excel file containing:
- **Temporal Data:** Frame-by-frame biomechanical features.
- **Joint Positions:** x, y coordinates of detected joints.
- **Joint Angles:** Key joint angles computed per frame.
- **Segment Orientation:** Body segment angles relative to the frame.
- **Event Log:** Binary event markers (0 = non-event, 1 = event).
- **Static Parameters:** Metrics like **stroke rate**, extracted for the entire video.

### 3️⃣ Interactive Report 📈
- An **HTML file** that synchronizes:
  - The **annotated video**.
  - **Plotly-generated figures** showing biomechanical trends.
- Enables users to **explore data interactively**.

## 🚀 How to View the Demo
1. Visit the **GitHub Pages site**: [Link will be added after deployment]
2. Watch the **annotated video**.
3. Download the **Excel file**.
4. Explore the **interactive report**.

## 📂 Repository Structure
```
/swimming-analysis-demo
 ├── docs/
 │   ├── index.html        # Main webpage
 │   ├── output.mp4  # Example annotated video
 │   ├── output.xlsx       # Example Excel file
 │   ├── report.html       # Interactive report (Plotly visualization)
```

## 🛠️ Setup for Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/swimming-analysis-demo.git
   ```
2. Open `docs/index.html` in a browser.

---
🎯 **Goal**: Provide an easy-to-access **visual and analytical** demonstration of swimming biomechanics insights. 🚀

