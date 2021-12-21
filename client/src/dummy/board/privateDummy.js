export const thisPostDummy = {
  projectId: 9,
  title: 'just DO IT!',
  confirmed: 1,
  recruitment: 4,
  content: `임베디드 시스템(영어: embedded system, 내장형 시스템)은 기계나 기타 제어가 필요한 시스템에 대해, 제어를 위한 특정 기능을 수행하는 컴퓨터 시스템으로 장치 내에 존재하는 전자 시스템이다. 즉, 임베디드 시스템은 전체 장치의 일부분으로 구성되며 제어가 필요한 시스템을 위한 두뇌 역할을 하는 특정 목적의 컴퓨터 시스템이다. 이에 비해 개인용 컴퓨터와 같은 특정되지 않는 일반적인 목적을 수행하는 컴퓨터 시스템과 대조된다. 특정 목적을 수행하는 컴퓨터 시스템이므로 목적을 설정하고 이를 수행하는 프로그램 코드를 작성하여 메모리에 기록하고 이를 읽어 동작 시키는 방법이 일반적이다.
    전자 하드웨어와 기계 부분을 포함하는 전체 장치의 일부로 내장되었다는 의미에서 임베디드 단어가 사용되었다. 임베디드 시스템은 오늘날 일상 생활에 쓰이는 많은 장치들을 제어하고 있다.[1]
    전자 시스템을 통해 특정 기능을 수행하는 컴퓨터 시스템이며, 종종 실시간(real-time computing) 계산을 행하는 데 있어 제약을 갖는다.[2][3]
    임베디드 시스템에는 마이크로컨트롤러(microcontroller)나 DSP(digital signal processor) 등의 프로세서 코어가 장착될 수 있다.[4]
    마이크로컨트롤러는 규모가 작은 시스템에 사용하므로 보통 운영 체제를 포함하지 않는 경향이 있다면, 임베디드는 좀 더 규모가 크기 때문에 운영 체제(윈도우 CE, 또는 리눅스 커널)가 시스템에 포함된다. 이 운영체제 위에 특수한 기능만을 수행하도록 응용 프로그램이 장착되어 동작하는 경향이있다. 예를 들어 같은 ARM이라도 마이크로컨트롤러는 한 칩에 메모리(플래시, RAM)을 포함하고 기타 하드웨어(타이머, UART, SPI, ADC 등 필요에 따라 장착)를 포함한다. 여기서 메모리는 용량이 크지 않기 때문에 운영체제를 포함하기에는 한계가 있다. 그러나 임베디드 시스템에서는 하드웨어는 한 칩내에 장착하지만,
    칩 밖에 많은 용량의 메모리를 장착하고 PCB에서 연결하는 것이 일반적이다. 이것은 시스템이 크기 때문에 용량이 큰 메모리를 시스템에 장착할 필요성이 있기 때문이다. `,
  start: 1,
  done: 1,
}

export default {
  host: {
    // projectId: '', // 내가 쓴 글이 없을 때 더미
    projectId: 9, // 내가 쓴 글이 있을 때 더미
    start: 0,
    done: 0,
  },
  guest: {
    // confirmed or wishList 반드시 둘 중 하나만 있을 수 있음 && host or guest둘중 하나만 있을 수 있음. 양식은 둘다 존재
    wishList: [],
    confirmed: {
      projectId: 123,
      title: 'name',
      start: 0,
      done: 0,
    },
  },
}
