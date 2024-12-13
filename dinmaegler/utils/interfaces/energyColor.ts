export const getEnergyColor = (energyLabel: string) => {
    switch (energyLabel) {
      case 'A':
        return 'bg-green-500 text-white';
      case 'B':
        return 'bg-yellow-500 text-black';
      case 'C':
        return 'bg-orange-500 text-white';
      case 'D':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  