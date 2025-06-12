# CupertinoText

A beautiful Cupertino-style slide-down fade-in text animation effect for React applications, featuring Apple's signature staggered animations that create engaging visual experiences.

## Features

- 🍎 **Authentic Cupertino design** - Matches Apple's interface animation style
- 🎯 **Smooth exponential easing** - Uses cubic-bezier curves for natural motion
- 📱 **Apple-style staggered animations** - Each word/line animates with beautiful delay
- 🔄 **Intersection Observer** - Triggers when element enters viewport
- ⚡ **Highly customizable** - Control timing, distance, stagger, and more
- 📝 **Word or line-based** - Animate by individual words or entire lines
- 🎨 **CSS-in-JS** - No external stylesheets needed
- 📱 **Responsive** - Works great on all devices
- 🔧 **TypeScript support** - Full type definitions included

## Installation

Install the package via npm:

```bash
npm install cupertino-text
```

or

```bash
npm i cupertino-text
```

## Usage

Import the CupertinoText component into your React application:

```jsx
import React from 'react';
import CupertinoText from 'cupertino-text';
```

### Basic Usage

By default, text will slide down and fade in word by word with Cupertino-style timing:

```jsx
<CupertinoText>
  Transform your text with beautiful Cupertino animations
</CupertinoText>
```

### Line-by-Line Animation

Use the `lines` prop to animate entire lines instead of individual words:

```jsx
<CupertinoText lines>
  First line slides in with Cupertino elegance
  Second line follows with perfect timing
  Third line completes the sequence beautifully
</CupertinoText>
```

### Custom Timing and Effects

Customize the animation with various props:

```jsx
<CupertinoText 
  delay={200}
  duration={1000}
  stagger={120}
  distance={80}
>
  Customize every aspect of the Cupertino animation
</CupertinoText>
```

### With Custom Styling

Apply your own styles using className or style props:

```jsx
<CupertinoText 
  className="my-custom-text"
  style={{ 
    fontSize: '2rem', 
    fontWeight: 'bold',
    color: '#007AFF'  // Cupertino blue
  }}
>
  Styled Cupertino animated text
</CupertinoText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The text or content to animate |
| `delay` | `number` | `0` | Initial delay before animation starts (ms) |
| `duration` | `number` | `800` | Duration of each element's animation (ms) |
| `stagger` | `number` | `80` | Delay between each word/line animation (ms) |
| `distance` | `number` | `60` | Distance elements slide from (px) |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `CSSProperties` | `{}` | Inline styles for the container |
| `lines` | `boolean` | `false` | Animate by lines instead of words |
| `triggerOnce` | `boolean` | `true` | Whether to trigger animation only once |

## Animation Details

The component uses authentic Cupertino design principles:
- **Cubic-bezier easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for Apple's signature smooth motion
- **Intersection Observer**: Automatically triggers when element becomes visible
- **Transform-based animation**: Uses `translateY` for better performance
- **Staggered timing**: Each word/line has progressively longer delay, just like in Apple's interfaces

## Examples

### Hero Section

```jsx
<CupertinoText 
  duration={1200}
  stagger={100}
  style={{ fontSize: '3rem', fontWeight: '700' }}
>
  Welcome to the Future
</CupertinoText>
```

### Feature List

```jsx
<CupertinoText 
  lines
  delay={300}
  stagger={150}
>
  ✨ Beautiful Cupertino animations
  🚀 Easy to implement  
  🎨 Fully customizable
</CupertinoText>
```

### Marketing Copy

```jsx
<CupertinoText 
  duration={600}
  stagger={60}
  distance={40}
>
  Experience the magic of smooth Cupertino text animations that captivate your users
</CupertinoText>
```

### Apple-style Product Showcase

```jsx
<CupertinoText 
  lines
  duration={900}
  stagger={200}
  style={{ 
    fontSize: '2.5rem', 
    fontWeight: '600',
    color: '#1d1d1f'
  }}
>
  iPhone 15 Pro
  Titanium. So strong. So light.
  So Pro.
</CupertinoText>
```

## Performance

- Uses `transform` and `opacity` for GPU-accelerated animations
- Intersection Observer prevents animations on hidden elements
- Minimal bundle size with no external dependencies
- Optimized for 60fps animations, matching Apple's standards

## Browser Support

- Chrome/Edge 51+
- Firefox 55+
- Safari 12.1+
- iOS Safari 12.2+

## Dependencies

**Peer Dependencies:**
- React: >=16.8.0
- react-dom: >=16.8.0

Make sure your project has compatible versions of React installed.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/sarvesh-tech/cupertino-text).

---

**Bring Apple's signature animation style to your React applications with cupertino-text! 🍎✨**