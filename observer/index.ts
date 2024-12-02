import { DisplayObserver } from "./impl/display.observer";
import { UnixObserver } from "./impl/unix.observer";
import { WeatherSubject } from "./impl/weather.subject";

function main() {
  const weather = new WeatherSubject();
  const display = new DisplayObserver();
  const unix = new UnixObserver();

  weather.register(display);
  weather.register(unix);

  weather.changed("first updated");
  weather.changed("second updated");

  weather.remove(unix);
  weather.changed("third updated");
}

main();
