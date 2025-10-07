const main = document.querySelector("main");

let questions = [
  {
    question:
      "Do zarządzania przydziałami dyskowymi w systemach Windows 7 oraz Windows 8 służy narzędzie",
    answers: ["query", "dcpromo", "perfmon", "fsutil"],
    correct: "fsutil",
  },
  {
    question:
      "Ile maksymalnie partycji podstawowych na dysku twardym z tablicą MBR pozwala utworzyć narzędzie Zarządzanie dyskami dostarczone wraz z systemem Windows?",
    answers: ["3", "4", "2", "1"],
    correct: "4",
  },
  {
    question:
      "Aby wyeliminować podstawowe zagrożenia związane z bezpieczeństwem pracy na komputerze podłączonym do sieci Internet, w pierwszej kolejności należy",
    answers: [
      "zainstalować program antywirusowy, zaktualizować bazy wirusów, włączyć firewall i wykonać aktualizację systemu",
      "odsunąć komputer od źródła ciepła, nie przygniatać przewodów zasilających komputera i urządzeń peryferyjnych",
      "sprawdzić temperaturę podzespołów, podłączyć komputer do zasilacza UPS oraz nie wchodzić na podejrzane strony internetowe",
      "wyczyścić wnętrze jednostki centralnej, nie jeść i nie pić przy komputerze oraz nie podawać swojego hasła innym użytkownikom",
    ],
    correct:
      "zainstalować program antywirusowy, zaktualizować bazy wirusów, włączyć firewall i wykonać aktualizację systemu",
  },
  {
    question:
      "W dokumentacji systemu operacyjnego Windows XP opisane są pliki z rozszerzeniem .dll. Rozszerzenie to dotyczy pliku",
    answers: [
      "dziennika zdarzeń",
      "inicjalizacyjnego",
      "biblioteki",
      "uruchamialnego",
    ],
    correct: "biblioteki",
  },
  {
    question:
      "W systemie Linux plik ma ustawione uprawnienia na 541. Właściciel może plik",
    answers: [
      "odczytać i wykonać",
      "modyfikować",
      "odczytać, zapisać i wykonać",
      "tylko wykonać",
    ],
    correct: "odczytać i wykonać",
  },
  {
    question:
      "Do przywracania struktury kluczy rejestru z kopii zapasowej w systemie Windows stosowane jest polecenie",
    answers: ["reg restore", "reg add", "reg load", "reg import"],
    correct: "reg restore",
  },
  {
    question:
      "Aby sprawdzić statystyki użycia pamięci wirtualnej w systemie Linux, należy sprawdzić zawartość pliku",
    answers: ["xload", "/proc/vmstat", "pagefile.sys", "/etc/inittab"],
    correct: "/proc/vmstat",
  },
  {
    question:
      "Narzędziem do monitorowania wydajności i niezawodności w systemach Windows 7, Windows Server 2008 R2 oraz Windows Vista jest",
    answers: ["perfmon.msc", "devmgmt.msc", "dfrg.msc", "tsmmc.msc"],
    correct: "perfmon.msc",
  },

  {
    question:
      "Programem typu wirus, którego głównym celem jest rozprzestrzenianie się w sieci komputerowej, jest",
    answers: ["robak", "backdoor", "trojan", "keylogger"],
    correct: "robak",
  },
  {
    question:
      "Polecenie chmod ug=rw szkola.txt zmienia uprawnienia pliku. Jaki będzie efekt działania?",
    answers: [
      "-rw- rw- rw- 1 admin admin 25 04-09 15:17 szkola.txt",
      "-rwx ~x rw- 1 admin admin 25 04-09 15:17 szkola.txt",
      "-rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt",
      "-rwxr-x r-x 1 admin admin 25 04-09 15:17 szkola.txt",
    ],
    correct: "-rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt",
  },
  {
    question:
      "Domyślnie, w systemie Linux, twardy dysk w standardzie SATA oznaczony jest",
    answers: ["sda", "fda", "ide", "ida"],
    correct: "sda",
  },
  {
    question:
      "Systemy plików o dużym bezpieczeństwie i możliwości szyfrowania danych dostępne są w systemie Windows",
    answers: ["NTSC", "2000/7/XP", "NC", "Server"],
    correct: "Server",
  },
  {
    question: "Program VirtualPC firmy Microsoft służy do korzystania",
    answers: [
      "z konta osobistego o pojemności 1 GB w serwerze wirtualnym firmy Microsoft",
      "z bezpłatnej pomocy technicznej TechNet.Soft firmy Virtual Soft",
      "z wirtualnych systemów operacyjnych na dysku lokalnym",
      "z bezpłatnego konta o pojemności 100 MB w ramach hostingu firmy Microsoft",
    ],
    correct: "z wirtualnych systemów operacyjnych na dysku lokalnym",
  },
  {
    question:
      "Przed wykonaniem prac serwisowych związanych z modyfikacją rejestru systemu Windows należy wykonać",
    answers: [
      "oczyszczanie dysku",
      "defragmentację dysku",
      "kopię rejestru",
      "czyszczenie rejestru",
    ],
    correct: "kopię rejestru",
  },
  {
    question:
      "Aby włączyć lub wyłączyć usługi w zainstalowanym systemie operacyjnym Windows, można posłużyć się przystawką",
    answers: ["dfsgui.msc", "dcpol.msc", "lusrmgr.msc", "services.msc"],
    correct: "services.msc",
  },
  {
    question:
      "W systemie Windows przypisanie rozszerzeń plików do aplikacji jest realizowane przez polecenie",
    answers: ["path", "label", "bcdedit", "assoc"],
    correct: "assoc",
  },
  {
    question:
      "Użycie polecenia attrib +h +s +r przykład.txt w linii poleceń systemu Windows spowoduje",
    answers: [
      "zapisanie ciągu znaków hsr w pliku przykład.txt",
      "zabezpieczenie pliku przykład.txt hasłem hsr",
      "nadanie dla pliku przykład.txt atrybutów: ukryty, skompresowany, tylko do odczytu",
      "nadanie dla pliku przykład.txt atrybutów: ukryty, systemowy, tylko do odczytu",
    ],
    correct:
      "nadanie dla pliku przykład.txt atrybutów: ukryty, systemowy, tylko do odczytu",
  },
  {
    question:
      "Użytkownik chce tak zmodernizować komputer, aby działały na nim gry wymagające DirectX12. Jaki system operacyjny powinien zakupić?",
    answers: ["Windows 8.1", "Windows XP", "Windows 8", "Windows 10"],
    correct: "Windows 10",
  },
  {
    question: "Polecenie systemowe ipconfig umożliwia konfigurację",
    answers: [
      "interfejsów sieciowych",
      "mapowania dysków sieciowych",
      "rejestru systemu",
      "atrybutów uprawnień dostępu",
    ],
    correct: "interfejsów sieciowych",
  },
  {
    question:
      "Które polecenie należy wykonać w celu zamontowania pierwszej partycji logicznej dysku primary slave w systemie Linux?",
    answers: [
      "mount /dev/hdb3 /mnt/hdd",
      "mount /dev/hdb5 /mnt/hdd",
      "mount /dev/hda2 /mnt/hdd",
      "mount /dev/hda4 /mnt/hdd",
    ],
    correct: "mount /dev/hdb5 /mnt/hdd",
  },
  {
    question:
      "Aby po uruchomieniu systemu Windows automatycznie włączał się program Kalkulator, należy wykonać konfigurację",
    answers: [
      "pulpitu systemowego",
      "harmonogramu zadań",
      "pliku wymiany",
      "funkcji Snap i Peak",
    ],
    correct: "harmonogramu zadań",
  },
  {
    question: "Które z poleceń systemu Linux powoduje zakończenie procesu?",
    answers: ["null", "dead", "end", "kill"],
    correct: "kill",
  },
  {
    question: "W systemie plików NTFS zmianę nazwy pliku umożliwia uprawnienie",
    answers: ["zapisu", "odczytu", "odczytu i wykonania", "modyfikacji"],
    correct: "modyfikacji",
  },
  {
    question: "W systemie Linux użycie polecenia passwd Ala spowoduje",
    answers: [
      "wyświetlenie członków grupy Ala",
      "wyświetlenie ścieżki do katalogu Ala",
      "ustawienie hasła użytkownika Ala",
      "utworzenie konta użytkownika Ala",
    ],
    correct: "ustawienie hasła użytkownika Ala",
  },
  {
    question:
      "W systemie Linux mamy następujące prawa dostępu do pewnego pliku rwxr--r--. Jakim poleceniem zmienimy je na rwxrwx---?",
    answers: [
      "chmod 755 nazwapliku",
      "chmod 221 nazwapliku",
      "chmod 544 nazwapliku",
      "chmod 770 nazwapliku",
    ],
    correct: "chmod 770 nazwapliku",
  },
  {
    question:
      "Zagrożeniem dla bezpieczeństwa systemu operacyjnego, wymuszającym jego automatyczną aktualizację, są",
    answers: [
      "błędne hasła użytkowników z prawami administratora",
      "luki w oprogramowaniu systemowym",
      "błędnie zainstalowane sterowniki urządzeń",
      "niewłaściwie ustawione prawa do plików",
    ],
    correct: "luki w oprogramowaniu systemowym",
  },
  {
    question:
      "Aby przetestować w systemie Windows poprawność działania nowo zainstalowanej drukarki, należy",
    answers: [
      "sprawdzić stan urządzenia w Menadżerze urządzeń",
      "wydrukować stronę testową za pomocą zakładki Ogólne w oknie Właściwości drukarki",
      "uruchomić program gpupdate /force w Wierszu poleceń",
      "uruchomić program diagnostyczny dxdiag",
    ],
    correct:
      "wydrukować stronę testową za pomocą zakładki Ogólne w oknie Właściwości drukarki",
  },
  {
    question:
      "Polecenie uname -s w systemie Linux jest wykorzystywane do sprawdzania",
    answers: [
      "wolnego miejsca na dyskach twardych",
      "nazwy jądra systemu operacyjnego",
      "statusu aktywnych interfejsów sieciowych",
      "ilości wolnej pamięci",
    ],
    correct: "nazwy jądra systemu operacyjnego",
  },
  {
    question:
      "W systemie Windows XP do zmiany typu systemu plików na dysku z FAT32 na NTFS należy skorzystać z programu",
    answers: ["convert", "subst", "replace", "attrib"],
    correct: "convert",
  },
  {
    question:
      "Najmniej inwazyjnym, lecz skutecznym sposobem leczenia komputera zainfekowanego wirusem typu rootkit jest",
    answers: [
      "uruchomienie specjalnego programu wykrywającego rootkity z zewnętrznego nośnika (np. LiveCD)",
      "usunięcie podejrzanych procesów z Menadżera zadań",
      "zainstalowanie najlepszego programu antywirusowego i włączenie go w tryb monitora",
      "przeinstalowanie systemu operacyjnego",
    ],
    correct:
      "uruchomienie specjalnego programu wykrywającego rootkity z zewnętrznego nośnika (np. LiveCD)",
  },
  {
    question: "Wskaż program systemu Linux, służący do kompresji danych",
    answers: ["gzip", "arj", "tar", "shar"],
    correct: "gzip",
  },
  {
    question:
      "Użytkownik systemu Linux, który chce wyszukać za pomocą polecenia systemowego pliki o określonej nazwie, może posłużyć się poleceniem",
    answers: ["pwd", "search", "pine", "find"],
    correct: "find",
  },
  {
    question:
      "Którego polecenia należy użyć w konsoli do naprawy błędów na dysku?",
    answers: ["CHDIR", "CHKDSK", "SUBST", "DISKCOMP"],
    correct: "CHKDSK",
  },
  {
    question:
      "W systemie Linux do zarządzania tablicami partycji można wykorzystać polecenie",
    answers: ["free", "fdisk", "Ispci", "iostat"],
    correct: "fdisk",
  },
  {
    question:
      "Aby utworzyć las w strukturze katalogowej AD DS (Active Directory Domain Services), należy utworzyć co najmniej",
    answers: [
      "jedno drzewo domeny",
      "dwa drzewa domeny",
      "trzy drzewa domeny",
      "cztery drzewa domeny",
    ],
    correct: "jedno drzewo domeny",
  },
  {
    question: "Co NIE wpływa na utratę danych z pamięci masowej HDD?",
    answers: [
      "Fizyczne uszkodzenie dysku",
      "Zniszczenie talerzy dysku",
      "Utworzona macierz dyskowa RAID 5",
      "Sformatowanie partycji dysku",
    ],
    correct: "Utworzona macierz dyskowa RAID 5",
  },
  {
    question:
      "Do uruchomienia edytora rejestru w systemie Windows należy użyć narzędzia",
    answers: ["msconfig", "regedit", "cmd", "ipconfig"],
    correct: "regedit",
  },
  {
    question:
      "Jaki wyraz należałoby wstawić w wykropkowanym miejscu na schemacie blokowym ilustrującym budowę systemu operacyjnego?",
    answers: ["Powłoka", "Sterowniki", "Programy użytkowe", "Benchmarki"],
    correct: "Powłoka",
  },
  {
    question:
      "W systemie Linux do monitorowania użycia procesora, pamięci, procesów i obciążenia systemu służy polecenie",
    answers: ["rev", "ifconfig", "top", "grep"],
    correct: "top",
  },
  {
    question:
      "W systemie Linux wyświetlenie informacji o uruchomionych procesach umożliwia polecenie",
    answers: ["ps", "su", "rm", "ls"],
    correct: "ps",
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

questions = shuffle(questions);

const LS_KEY = "quizAnswers";
const LS_TIME_KEY = "quizEndTime";
let selectedAnswers = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let quizEndTime = localStorage.getItem(LS_TIME_KEY);

function loadAllQuestions() {
  main.innerHTML = "";
  questions.forEach((question, qIdx) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    const questionElement = document.createElement("h2");
    questionElement.textContent = question.question;
    questionBox.appendChild(questionElement);

    // Losujemy odpowiedzi do wyświetlenia
    const shuffledAnswers = shuffle([...question.answers]);
    // Szukamy odpowiedzi użytkownika po id pytania
    const userAnswer = selectedAnswers.find(
      (a) => a && a.id === question.question
    );
    shuffledAnswers.forEach((answer, aIdx) => {
      const answerElement = document.createElement("div");
      answerElement.textContent = answer;
      answerElement.classList.add("answer");
      answerElement.addEventListener("click", () =>
        selectAnswer(question.question, aIdx, answerElement)
      );
      // Zaznaczenie wybranej odpowiedzi po odświeżeniu
      if (userAnswer && userAnswer.answerIdx === aIdx) {
        answerElement.classList.add("selected");
      }
      questionBox.appendChild(answerElement);
    });
    main.appendChild(questionBox);
  });
  const finishButton = document.createElement("button");
  finishButton.textContent = "Zakończ test";
  finishButton.addEventListener("click", showResults);
  finishButton.id = "finishBtn";
  finishButton.disabled = selectedAnswers.includes(null);
  main.appendChild(finishButton);
}

function selectAnswer(questionId, aIdx, element) {
  const questionBox = element.parentElement;
  questionBox.querySelectorAll(".answer").forEach((el) => {
    el.classList.remove("selected");
  });
  element.classList.add("selected");
  // Aktualizuj odpowiedź użytkownika po id pytania
  const idx = selectedAnswers.findIndex((a) => a && a.id === questionId);
  if (idx !== -1) {
    selectedAnswers[idx].answerIdx = aIdx;
  } else {
    selectedAnswers.push({ id: questionId, answerIdx: aIdx });
  }
  localStorage.setItem(LS_KEY, JSON.stringify(selectedAnswers));
  // Sprawdź czy wszystkie pytania mają odpowiedź
  const allAnswered = questions.every((q) =>
    selectedAnswers.find((a) => a && a.id === q.question)
  );
  document.getElementById("finishBtn").disabled = !allAnswered;
}

function showResults() {
  let score = 0;
  questions.forEach((q, qIdx) => {
    const userAnswer = selectedAnswers.find((a) => a && a.id === q.question);
    if (userAnswer && q.answers[userAnswer.answerIdx] === q.correct) score++;
  });
  const now = Date.now();
  localStorage.setItem(LS_TIME_KEY, now);
  const timeStr = new Date(now).toLocaleTimeString();
  main.innerHTML = `<h2>Twój wynik: ${score} z ${questions.length}</h2><div style='margin-top:10px'>Czas zakończenia: ${timeStr}</div>`;
}

function showReview() {
  main.innerHTML = "";
  questions.forEach((question, qIdx) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    const questionElement = document.createElement("h2");
    questionElement.textContent = question.question;
    questionBox.appendChild(questionElement);

    question.answers.forEach((answer, aIdx) => {
      const answerElement = document.createElement("div");
      answerElement.textContent = answer;
      answerElement.classList.add("answer");
      const userAnswer = selectedAnswers.find(
        (a) => a && a.id === question.question
      );
      if (userAnswer && userAnswer.answerIdx === aIdx) {
        if (answer === question.correct) {
          answerElement.classList.add("review-correct");
        } else {
          answerElement.classList.add("review-wrong");
        }
      }
      questionBox.appendChild(answerElement);
    });
    main.appendChild(questionBox);
  });
  let score = 0;
  questions.forEach((q, qIdx) => {
    const userAnswer = selectedAnswers.find((a) => a && a.id === q.question);
    if (userAnswer && q.answers[userAnswer.answerIdx] === q.correct) score++;
  });
  main.innerHTML += `<h2>Twój wynik: ${score} z ${questions.length}</h2>`;
}

function checkReviewMode() {
  if (quizEndTime) {
    const now = Date.now();
    const diff = now - parseInt(quizEndTime, 10);
    // Oblicz wynik na podstawie zapisanych odpowiedzi
    let score = 0;
    questions.forEach((q) => {
      const userAnswer = selectedAnswers.find((a) => a && a.id === q.question);
      if (userAnswer && q.answers[userAnswer.answerIdx] === q.correct) score++;
    });
    const timeStr = new Date(parseInt(quizEndTime, 10)).toLocaleTimeString();
    if (diff < 10 * 60 * 1000) {
      // Przez 10 minut po zakończeniu quizu pokazuj wynik i czas
      main.innerHTML = `<h2>Twój wynik: ${score} z ${questions.length}</h2><div style='margin-top:10px'>Czas zakończenia: ${timeStr}</div>`;
      return true;
    } else {
      showReview();
      return true;
    }
  }
  return false;
}

if (!checkReviewMode()) {
  loadAllQuestions();
}
