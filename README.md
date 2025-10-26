# 🎮 GameShop – אתר משחקים מתקדם

ברוכים הבאים לפרויקט **GameShop** – אתר אינטראקטיבי לרכישת משחקים ולניהול חנות דיגיטלית, שנבנה כפרויקט Full-Stack מושקע.  
המערכת מציעה חוויית משתמש נוחה וידידותית ללקוח, יחד עם ממשק ניהול מלא למנהלי האתר.

---

## 🧩 סקירת הפרויקט

באתר זה ניתן:
- לצפות בכל המשחקים שהאתר מציע, וכן פרטים נוספים על כל משחק.
- להירשם, להתחבר ולנהל אזור אישי
- להוסיף משחקים לסל קניות, לבצע רכישה ולעקוב אחרי פרטי קנייה

לצד זה, המנהל יכול:
- להוסיף, לעדכן או למחוק משחקים
- להוסיף, לעדכן או למחוק קטגוריות.

הפרויקט מדגים שילוב של **Frontend ריאקטיבי וחווייתי** עם **Backend מאובטח ויעיל**, תוך שימוש ב־SQL לניהול נתונים.

---

## 🛠️ טכנולוגיות בשימוש

### 🖥️ צד לקוח – React
- React + JSX
- Redux Toolkit
- React Router
- Axios לשליחת בקשות לשרת
- React Bootstrap
- React Icons

### 🧠 צד שרת – ASP.NET C# .NET
- Web API מבוסס REST
- ארכיטקטורת 3 שכבות (Controller ➝ BLL ➝ DAL)
- Entity Framework Core
- טיפול בשגיאות ולוגים
- שימוש ב־DTOs ו־Models
- AutoMapper

### 💾 מסד נתונים – SQL Server
- טבלאות ללקוחות, משחקים, קטגוריות, הזמנות ועוד
- שאילתות יעילות וניהול קשרים בין ישויות

---

## 📂 מבנה הפרויקט

```
/Project_fullStake
│
├── myproject-react        --> Frontend React
├── WebApiGames            --> Backend Web API (.NET)
│   ├── Controllers        --> נקודות קצה API
│   ├── BLL                --> שכבת לוגיקה עסקית
│   ├── DAL                --> שכבת גישת נתונים
│   └── DTO                --> Data Transfer Objects
├── Server                 --> סקריפטים SQL
└── README.md
```

---

## 🚀 איך להריץ את הפרויקט

### דרישות מקדימות:
- Node.js (גרסה 14 ומעלה)
- .NET SDK (גרסה 6.0 ומעלה)
- SQL Server (במקרה שלנו: DESKTOP-L9S4R74)
- Visual Studio או Visual Studio Code (אופציונלי)

---

### שלב 1: שכפול המאגר

```bash
git clone https://github.com/Miriam-Epstein/Project_fullStake.git
cd Project_fullStake
```

---

### שלב 2: התקנת תלויות Frontend

פתח PowerShell בתיקיית הפרויקט והרץ:

```powershell
cd myproject-react
npm install
```

> **הערה:** ההתקנה עשויה להציג אזהרות על חבילות מיושנות או פגיעויות אבטחה. זה נורמלי ולא מונע את ההרצה.

---

### שלב 3: בדיקת מסד הנתונים

פתח **SQL Server Management Studio**:

1. לחץ `Windows + R` והקלד `ssms`
2. התחבר לשרת שלך (במקרה שלנו: `DESKTOP-L9S4R74`)
3. ודא שהמסד `GameStoreDB` קיים ומכיל את הטבלאות הבאות:
   - `Category`
   - `Customer`
   - `Games`
   - `PurchaseDetails`
   - `Shopping`

> **הערה:** אם המסד עדיין לא קיים, הרץ את הסקריפט `Server/ServerGame.sql`

---

### שלב 4: תיקון Connection String

פתח את הקובץ `WebApiGames/WebApiGames/Program.cs` ומצא את שורה 38.

**החלף מ:**
```csharp
(options => options.UseSqlServer("Scaffold-DbContext \"Server=DESKTOP-L9S4R74;Database=GameStoreDB;TrustServerCertificate=True;Trusted_Connection=True;\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir models"));
```

**ל:**
```csharp
(options => options.UseSqlServer("Server=DESKTOP-L9S4R74;Database=GameStoreDB;TrustServerCertificate=True;Trusted_Connection=True;"));
```

---

### שלב 5: הרצת Backend

פתח PowerShell חדש והרץ:

```powershell
cd "C:\Users\This User\Desktop\פרויקטים GitHub משופצים\Project_fullStake\WebApiGames\WebApiGames"
dotnet run
```

**תראה את ההודעה:**
```
Now listening on: https://localhost:7035
Now listening on: http://localhost:5261
Application started. Press Ctrl+C to shut down.
```

השאר את הטרמינל הזה פתוח!

---

### שלב 6: הרצת Frontend

פתח PowerShell נוסף והרץ:

```powershell
cd "C:\Users\This User\Desktop\פרויקטים GitHub משופצים\Project_fullStake\myproject-react"
npm start
```

הדפדפן יפתח אוטומטית ל: **http://localhost:3000**

---

## ✅ אימות שהכל עובד

אם הכל תקין, אמור לראות:
- ✅ רשימת משחקים בעמוד הבית
- ✅ תמונות משחקים מוצגות
- ✅ אפשרות להתחבר/להירשם
- ✅ תפריט ניווט תקין

---

## 🔧 פתרון בעיות נפוצות

### הבעיה: Backend לא רץ
**פתרון:** ודא שה-Connection String ב-`Program.cs` מתאים לשרת SQL שלך

### הבעיה: Frontend לא מציג משחקים
**פתרון:** ודא שה-Backend רץ ופועל על פורט 7035

### הבעיה: שגיאות CORS
**פתרון:** ודא שיש לך את השורה הבאה ב-`Program.cs`:
```csharp
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
```

---

## 💡 פיצ'רים עיקריים

- 🔐 התחברות והרשמה מאובטחת
- 🛒 סל קניות דינמי
- 🧑‍💼 מערכת ניהול משחקים למנהל
- 🧾 תקציר רכישות ללקוח
- 🌐 תקשורת עם API מודרני
- 📱 עיצוב רספונסיבי ונוח

---

## 🔄 פורטים בשימוש

- **Frontend:** http://localhost:3000
- **Backend HTTPS:** https://localhost:7035
- **Backend HTTP:** http://localhost:5261

---

## 📝 קרדיטים

**מפתחת הפרויקט:** מרים אפשטיין  
מפתחת Full-Stack עם תשוקה לפיתוח חוויית משתמש וניהול מערכות נתונים.

---

## 📄 רישיון

פרויקט זה פותח למטרות לימודיות ואישיות.
