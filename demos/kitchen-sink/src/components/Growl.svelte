<script>
  import { f7, Page, Navbar, Block, Button, Row, Col } from 'framework7-svelte';

</script>

<Page>
  <Navbar title="Growl Toasts" backLink="Back" />
  <Block strong>
    <Row>
      <Col>
        <Button fill>Error</Button>
      </Col>
      <Col>
        <Button fill>Success</Button>
      </Col>
      <Col>
        <Button fill>Warning</Button>
      </Col>
      <Col>
        <Button fill>Info</Button>
      </Col>
    </Row>
  </Block>
</Page>
