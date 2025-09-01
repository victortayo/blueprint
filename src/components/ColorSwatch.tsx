interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorSwatch = ({ colorName, colorValue, isSelected, onClick }: ColorSwatchProps) => {
  return (
    <button
      onClick={onClick}
      className={`color-swatch ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: colorValue }}
      title={colorName}
      aria-label={`Select ${colorName}`}
    />
  );
};

export default ColorSwatch;