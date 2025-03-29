// تحديث كود الواجهة لدعم إنشاء حساب جديد async function login() { const username = document.getElementById('login-username').value.trim(); const password = document.getElementById('login-password').value; const errorP = document.getElementById('login-error'); errorP.textContent = '';

if (!username || !password) {
    errorP.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
    return;
}

try {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        localStorage.setItem('token', data.token); // تخزين التوكن بأمان
        window.location.href = '/dashboard'; // إعادة التوجيه للصفحة الرئيسية
    } else {
        errorP.textContent = data.message || 'خطأ في تسجيل الدخول';
    }
} catch (error) {
    errorP.textContent = 'حدث خطأ أثناء الاتصال بالخادم';
}

}

document.getElementById('login-button').addEventListener('click', login);

// دالة لإنشاء حساب جديد async function register() { const username = document.getElementById('register-username').value.trim(); const password = document.getElementById('register-password').value; const errorP = document.getElementById('register-error'); const successP = document.getElementById('register-success'); errorP.textContent = ''; successP.textContent = '';

if (!username || !password) {
    errorP.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
    return;
}

try {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        successP.textContent = 'تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن';
    } else {
        errorP.textContent = data.message || 'حدث خطأ أثناء إنشاء الحساب';
    }
} catch (error) {
    errorP.textContent = 'حدث خطأ أثناء الاتصال بالخادم';
}

}

document.getElementById('register-button').addEventListener('click', register);

