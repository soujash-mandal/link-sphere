export function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return views.toString();
}

export function commaFormatNumbers(number: number): string {
  return new Intl.NumberFormat('en-IN').format(number);
}


