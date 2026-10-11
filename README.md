# Live Tracker

OBS-Browserquelle, die live anzeigt, wie viele Spieler gerade auf einem Minecraft-Server sind.

**URL für OBS** (Browserquelle, 1000 × 400):

```
https://flushedjulian.github.io/live-tracker/?host=DEINSERVER.de
```

| Parameter | Wirkung |
|---|---|
| `host=play.example.de` | Server-Adresse (Pflicht, gerne mit `:port`) |
| `edition=bedrock` | für Bedrock-Server (Standard: Java) |
| `scale=0.6` | ganzes Overlay verkleinern/vergrößern |
| `max=0` | „/ max“ ausblenden |
| `showhost=0` | Server-Adresse unten ausblenden |
| `label=Auf dem Server` | eigene Überschrift |
| `interval=60` | Abfrage alle X Sekunden (min. 30) |

Die Spielerzahl kommt von [mcstatus.io](https://mcstatus.io), bei Ausfall von [mcsrvstat.us](https://mcsrvstat.us). Beide cachen etwa eine Minute.
