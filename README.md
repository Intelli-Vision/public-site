# Intellivision

[![Netlify Status](https://api.netlify.com/api/v1/badges/84f1af7e-1693-4978-a31c-18b589a44751/deploy-status)](https://app.netlify.com/sites/intellivision-site/deploys)

Welcome to the **Intellivision** repository! We are a tech startup focused on revolutionizing augmented reality (AR) with our cutting-edge smart glasses. Our mission is to develop lightweight and practical AR solutions that redefine how people interact with the world.

## Product Vision

At Intellivision, we believe in empowering individuals and businesses by offering a seamless blend of the digital and physical world. Our smart glasses use advanced AR technology to provide real-time, intuitive information that enhances your everyday experiences. With our product, you can truly "see the future."

## Features

- **Lightweight Design**: Engineered for comfort and durability.
- **High-Performance AR**: Smooth and responsive augmented reality integration.
- **Long Battery Life**: Designed to last throughout the day.
- **Seamless Connectivity**: Pairs easily with your devices for a connected experience.
- **Advanced Optics**: Crystal-clear visual experience, even in bright sunlight.

## Getting Started

### Prerequisites

Ensure you have the following tools installed to work with this repository:

- Node.js
- pnpm (for package management)
- React
- TypeScript

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/intellivision.git
   ```

2. Navigate into the project directory:
   ```bash
   cd intellivision
   ```

3. Install the dependencies using pnpm:
   ```bash
   pnpm install
   ```

### Running the App

To start the development server, run:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
pnpm build
```

The optimized files will be in the `dist/` folder.

## Project Structure

- **/src**: Contains all the source code for the application.
  - **/components**: Reusable React components (e.g., `Header`, `Hero`, `Features`, `Footer`).
  - **/routes**: React Router routes for managing app navigation.
  - **/assets**: Static files, such as images and fonts.
  
## Contributing

We welcome contributions! To keep the commit history clean, all commits should be squashed before merging.

### Contribution Workflow

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes, then commit them:
   ```bash
   git add .
   git commit -m "Add feature-name"
   ```
4. Rebase and squash commits:
   ```bash
   git rebase -i main
   ```
   In the interactive rebase, mark all commits as `squash` except the first one.
   
5. Push your squashed commits to your branch:
   ```bash
   git push origin feature-name
   ```

6. Submit a pull request.

## License

This project is licensed under the a proprietary license - see the [LICENSE](LICENSE) file for details.