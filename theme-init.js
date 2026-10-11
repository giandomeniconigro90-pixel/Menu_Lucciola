if (new URLSearchParams(location.search).get('tema') === 'natale') {
      const theme = document.createElement('link');
      theme.id = 'seasonal-theme'; theme.rel = 'stylesheet'; theme.href = 'themes/natale.css';
      document.head.appendChild(theme);
    }
