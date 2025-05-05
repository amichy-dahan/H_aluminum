window.addEventListener('scroll', function () {
    const text = document.querySelector('.animated-text');
    const textPosition = text.getBoundingClientRect().top; // מיקום האלמנט במסך
    const screenPosition = window.innerHeight / 1.3; // המיקום שבו האנימציה תתחיל
  
    // אם האלמנט התקרב למסך, הוסף את המחלקה "show" שתגרום לו להיכנס
    if (textPosition < screenPosition) {
      text.classList.add('show');
    }
  });
  function toggleAccessibilityMenu() {
    var menu = document.getElementById("accessibilityMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  // פונקציה להגדלת גודל הטקסט
  function increaseFontSize() {
    const elements = document.querySelectorAll('p, b, span, h1, h2, h3, h4, h5');
    elements.forEach(el => {
      const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
      const currentSize = parseFloat(style);
      el.style.fontSize = (currentSize + 2) + 'px';
    });
  }
  function decreaseFontSize() {
    const elements = document.querySelectorAll('p, b, span, h1, h2, h3, h4, h5');
    elements.forEach(el => {
      const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
      const currentSize = parseFloat(style);
      if (currentSize > 10) { // מניעת הקטנה מוגזמת
        el.style.fontSize = (currentSize - 2) + 'px';
      }
    });
  }

  // פונקציה לשינוי ניגודיות
  function toggleContrast() {
    document.body.classList.toggle('high-contrast');
  }
  document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone) {
      alert("אנא מלא שם וטלפון");
      return;
    }

    const fullMessage = `שלום! אני ${name}, הטלפון שלי: ${phone}. ${message}`;
    const url = `https://wa.me/972526985573?text=${encodeURIComponent(fullMessage)}`;

    window.open(url, '_blank');
  });
  window.addEventListener('scroll', function () {
    const text = document.querySelector('.animated-text1');
    const textPosition = text.getBoundingClientRect().top; // מיקום האלמנט במסך
    const screenPosition = window.innerHeight / 1.3; // המיקום שבו האנימציה תתחיל
  
    // אם האלמנט התקרב למסך, הוסף את המחלקה "show" שתגרום לו להיכנס
    if (textPosition < screenPosition) {
      text.classList.add('show');
    }
  });
  function toggleAccessibilityMenu() {
    var menu = document.getElementById("accessibilityMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }


