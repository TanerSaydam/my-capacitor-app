# Capacitor ile Angular Uygulamanızı Mobile Uygulamasına Dönüştürün

## Youtube Videosu
https://youtu.be/pJbugHKdfRA

## Capacitor Documentation
https://capacitorjs.com/

## CLI Komutları
- Kurulum
```dash
npm i @capacitor/core
npm i -D @capacitor/cli
```

- Config dosyasını oluşturma
```dash
npx cap init
```

- Android ve IOS projelerini oluşturma
```dash
npm i @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
npx cap sync
```

- Android Studio da açma
```dash
npx cap open android
````

- Değişikliklerin sekronize edilmesi
```dash
ng build
npx cap copy
```

- Canlı şekilde değişikliği takip etme
```dash
ng serve -o --host 0.0.0.0
```

capacitor.config.ts dosyasına aşağıdaki parçayı ekleyin
```json
"server": {
    url: "http://your-ip-adress:4200/",
    cleartext: true
}
```

Not: Unutmayın canlıya alırken bu kısmı kapayıp "Değişikliklerin sekronize edilmesi" başlığını uygulayın
