# Vercel "Large Files" (Büyük Dosya) Uyarısını Çözme

Vercel deploy sırasında **büyük dosya** hatası veriyorsa, genelde GitHub’a yanlışlıkla büyük klasör veya dosyalar (örn. `node_modules`, `.next`) gönderilmiş demektir.

---

## 1. Bu dosyalar GitHub’a GİTMEMELİ (zaten .gitignore’da)

- `node_modules/` – NPM paketleri (çok büyük)
- `.next/` – Next.js build çıktısı
- `.vercel/` – Vercel önbelleği

Bunlar `.gitignore` dosyasında yazılı; **yeni** commit’lerde GitHub’a eklenmez.

---

## 2. Daha önce bu dosyaları push ettiyseniz (zaten GitHub’da ise)

Eğer projeyi **.gitignore eklemeden önce** push ettiyseniz, `node_modules` veya `.next` GitHub’a gitmiş olabilir. O zaman bunları repodan kaldırmanız gerekir.

### Adımlar (proje klasöründe terminal):

**A) GitHub’daki büyük dosyaları artık takip etme (silmeden sadece takibi bırak):**

```bash
git rm -r --cached node_modules
git rm -r --cached .next
git rm -r --cached .vercel
git add .
git commit -m "node_modules ve .next repodan çıkarıldı"
git push
```

Bu komutlar dosyaları bilgisayarınızdan **silmez**, sadece Git’in takibini kaldırır. Sonraki push’ta Vercel sadece gerçek proje dosyalarını görür.

**B) Eğer hâlâ "file too large" hatası alırsanız:**

- GitHub’da repo → **Settings** → sol menüden **Repository** bölümüne bakın.
- Hangi dosyanın büyük olduğu hata mesajında yazıyorsa, onu da ekleyin:
  ```bash
  git rm --cached "DOSYA_YOLU"
  git commit -m "Büyük dosya kaldırıldı"
  git push
  ```

---

## 3. Bundan sonra

- `.gitignore` güncel; yeni commit’lerde `node_modules` ve `.next` tekrar eklenmeyecek.
- Vercel, deploy sırasında kendi `npm install` ve `npm run build` yaptığı için bu klasörlere ihtiyaç duymaz; GitHub’da olmaları gerekmez.

Bu adımlardan sonra tekrar **Deploy** deneyin.
