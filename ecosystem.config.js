module.exports = {
  apps : [{
      //name des prozesses
      name: 'service',

      //das script was gestartet werden soll
      script: 'run.py',

      //der interpreter wenn vorhanden
      interpreter: 'venv/bin/python3',

      //die anzahl der instances des prozesses
      instances: 1,
      
      //das verzeichnis in dem auto reload schaut
      watch: ['src'],

      //reload delay time
      watch_delay: 1000,
      
      //die files oder ordner die kein reload verursachen sollen
      ignore_watch: [
        'logs',
        '__pychache__',
        'test'
      ],

      //globale variablen
      env: {
        'HOST':'0.0.0.0',
        'PORT': 8080
      },

      //der typ in dem die log zeilen sein sollen(json/format/raw)
      log_type: 'raw',
      
      //gibt jede log zeile ein zeitstempel
      time: true,

      //name und verzeichnis der error log datei
      error_file: 'logs/error.log',

      //name und verzeichnis der out log datei
      out_file: 'logs/out.log',

      //name und verzeichnis der combined log datei
      log_file: 'logs/combined.log',

      //startet den prozess neu wenn er crashed
      autorestart: true,

      //zeit in millisekunden bis zum reload wenn der prozess nicht mehr lauscht
      listen_timeout: 5000,

      //zeit in millisekunden bis ein abgestürzte prozess neu gestartet wird 
      // restart_delay: 5000,

      //eine zeitangabe wann der prozess immer neugestartet wird
      // cron_restart: '* * * * *',

      //zeit in millisekunden bis der prozess abgeschaltet wird
      // kill_timeout: 1600,

      //maximal anzahl an neustarts des prozesses bis er gestoppt wird
      // max_restarts: 10,
  }]
}