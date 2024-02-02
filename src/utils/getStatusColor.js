export const getStatusColor = (value) => {
    switch (value) {
      case "NEW":
        return 'bg-green-500';
      case "OPEN":
        return 'bg-blue-500';
      case "CLOSED":
        return 'bg-red-600';
      case 'ONHOLD':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };
  