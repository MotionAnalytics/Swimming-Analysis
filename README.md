# Swimming Analysis Demo

This repository hosts a **GitHub Pages** site demonstrating the outputs of a **pose estimation-based swimming analysis system integrating biomechanics**. The system processes swimming videos and generates various outputs, including annotated videos, analytical data in Excel format, and interactive reports.

## 📌 Outputs
### 1️⃣ Annotated Video 🎥
- A processed version of the input swimming video.
- Overlaid **joint positions** and **angles**.
- Used for **visual analysis of swimming technique**.

### 2️⃣ Excel Output 📊
A multi-sheet Excel file containing:
- **Temporal Data:** Frame-by-frame biomechanical features, each value has a corresponding confidence value.
  - **Joint Positions:** x, y coordinates of detected joints.
  - **Joint Angles:** Key joint angles computed per frame.
  - **Segment Orientation:** Body segment angles relative to the frame.
- **Event Log:** Binary event markers (0 = non-event, 1 = event).
  - *start/end event* - Frame where the analysis was started and ended.
  - *first/last detection* - First frame the detection model found the main athlete.
  - *first/last keypoint* - First frame the pose model found any keypoint.
- **Static Parameters:** Metrics like **stroke rate**, extracted for the entire video.

### 3️⃣ Interactive Report 📈
- An **HTML file** that synchronizes:
  - The **annotated video**.
  - **Plotly-generated figures** showing biomechanical trends.
- Enables users to **explore data interactively**.
- **Standardized coordinates** indicates that joint coordinates were centered around a point, and standardized by a distance.
  - For side view (sagittal) - centered around the hip, standardized using the average torso length (hip to shoulder)
  - For front view (transverse) - centered around the shoulders center, standardized using the distance between the shoulders.
  
 

## 🚀 How to View the Demo
1. Visit the **GitHub Pages site**: [https://motionanalytics.github.io/Swimming-Analysis/]
2. Watch the **annotated video**.
3. Download the **Excel file** - by clicking on the table images.
4. Explore the **interactive report** - opened by clicking on the video.


---
🎯 **Goal**: Provide an easy-to-access **visual and analytical** demonstration of swimming biomechanics insights. 🚀

