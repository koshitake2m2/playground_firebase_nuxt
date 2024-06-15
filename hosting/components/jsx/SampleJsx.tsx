type SampleChildProps = {
  messageA: string
}

const SampleChildA = defineComponent({
  props: {
    messageA: {
      type: String,
      required: true,
      default: 'a',
    },
  },
  setup(props: SampleChildProps) {
    console.log(props)
    return () => (
      <div>
        <p>{props.messageA}</p>
      </div>
    )
  },
})

export const SampleJsx = defineComponent({
  components: { SampleChild: SampleChildA },
  setup() {
    const message = ref('Hello, world!')
    const messageA = ref('Hello, child!')

    return () => (
      <div>
        <h1>{message.value}</h1>
        <SampleChildA messageA={messageA.value} />
      </div>
    )
  },
})
