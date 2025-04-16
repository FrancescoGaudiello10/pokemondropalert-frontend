# 🧠 PokémonDropAlert — Il Bot Intelligente per Collezionisti Pokémon

> 🔍 *"Non lasciare che gli scalper ti battano sul tempo. PokémonDropAlert ti avvisa in tempo reale quando esce qualcosa di raro!"*

![Pokemon Banner](https://i.pinimg.com/736x/3e/16/84/3e16843919fc478be4d1589cc1dcbb1e.jpg)

---

## 🚀 Cos'è PokémonDropAlert?

**PokémonDropAlert** è un bot intelligente sviluppato in Python che monitora in tempo reale decine di siti web italiani per segnalare **nuove uscite**, **prodotti rari** o **occasioni imperdibili** del mondo **Pokémon TCG (Trading Card Game)**.  
Il bot invia notifiche dirette su Telegram agli utenti iscritti, con un sistema **freemium** per offrire sia funzionalità gratuite che premium a 0,99€/mese.

---

## 🛠️ Stack Tecnologico

- **Python 3.11** — cuore del bot
- **BeautifulSoup & httpx** — scraping asincrono ad alte prestazioni
- **MongoDB Atlas** — database cloud per utenti e prodotti
- **python-telegram-bot** — gestione completa del bot Telegram
- **Heroku** — hosting con Webhook e Scheduler
- **Stripe API** — gestione abbonamenti premium
- **GitHub Pages** — landing page con dominio personalizzato
- **Instagram Reels Automation** — marketing virale giornaliero

---

## 📦 Funzionalità principali

### 👾 Bot Telegram

- `/start` — registra utente e mostra messaggio di benvenuto
- `/pokemon_giornaliero` — assegna un Pokémon casuale con sprite e dettagli
- `/my_pokemon` — collezione utente con paginazione e immagini
- `/subscribe` / `/unsubscribe` — attiva o disattiva le notifiche live
- `/statistiche_bot` — mostra utenti attivi e statistiche globali
- `/suggerisci_sito` — invio proposte di nuovi siti da monitorare


### 🔍 Monitoraggio Asincrono

- Più di **20 fetcher personalizzati** per i principali e-commerce italiani:
  - Toys Center, GameStop, Dadi e Mattoncini, Gamelife, Fantasia Store, Mornati Paglia, PopsPlanet, Cardgame Club, Zillerstore, MickeyMarket, FedericStore...
- Ogni fetcher è:
  - **asincrono e modulare**
  - ottimizzato per paginazione e parsing rapido
  - dotato di filtro per keyword indesiderate
  - con **normalizzazione prezzi** e controllo disponibilità reale

### 📊 Comparazione Dati

- Sistema di confronto tra dataset vecchi e nuovi:
  - ✅ Nuovi prodotti
  - 🔄 Prodotti modificati (prezzo, disponibilità)
  - ❌ Prodotti rimossi

### 💸 Sistema Premium (Freemium Model)

- Stripe Checkout per pagamenti sicuri
- Versione gratuita:
  - notifiche ogni **4 ore**
  - accesso limitato a **3 siti**
- Versione premium:
  - notifiche in **tempo reale**
  - accesso completo a **tutti i siti monitorati**

### 📱 Instagram & Marketing

- Profilo ufficiale: [@pokemondropalert](https://www.instagram.com/pokemondropalert/)
- Reel giornalieri: **"5 cose che non sapevi su un Pokémon"** (ordine Pokédex)
- Reel promozionali:
  - Hook → Problema → Soluzione → CTA
  - Montaggio semplificato con **Canva**
  - Script e audio inclusi per massimizzare l'engagement

---

## 💡 Perché l’ho creato?

Sono un programmatore Python con una forte passione per il mondo Pokémon.  
Volevo creare un progetto utile, **realmente funzionante**, che aiutasse:
- i veri collezionisti a **battere gli scalper**,
- me stesso a migliorare competenze in:
  - scraping avanzato,
  - gestione API,
  - automazione cloud e deploy,
  - sviluppo di bot intelligenti e UI/UX su Telegram e Instagram.

---

## 🌐 Link Utili

- 🧭 **Sito ufficiale**: [https://www.pokemondropalert.com](https://www.pokemondropalert.com)
- 🤖 **Bot Telegram**: [t.me/pokemondropalert_bot](https://t.me/pokemondropalert_bot)
- 📸 **Instagram**: [@pokemondropalert](https://www.instagram.com/pokemondropalert/)
- 💻 **GitHub repository**: disponibile su richiesta

---

## 📣 Collaborazioni & Espansioni

Vorrei espandere PokémonDropAlert ad altri ambiti:
- **Sneakers**, **Funko Pop**, **Console**, **Manga**, ecc.

Cerco collaboratori, creator, marketer o semplici appassionati per:
- potenziare il progetto,
- integrare nuove API,
- creare contenuti virali,
- espandere il sistema freemium ad altri fandom.

---

## ✍️ Contattami

Sono disponibile per:
- Progetti freelance o in team
- Consulenze tech su bot, scraping, Telegram, AI
- Workshop o mentorship Python

📩 francesco@example.com  
🔗 [linkedin.com/in/francesco-username](https://linkedin.com)

---

> *“Essere un collezionista non significa solo possedere carte… ma avere il giusto alleato che ti avvisa quando serve.”* 💡  
> PokémonDropAlert: **"Gotta Catch 'Em All... Before They’re Sold Out!"**
