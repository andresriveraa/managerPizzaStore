
import React from 'react'
import { Statistic, Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Collapse } from 'antd';
const { Panel } = Collapse

export default function StatisticComp({salesData,clients}) {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Clients today" value={clients.length} />
        </Col>
        <Col span={8}>
          <Statistic title="Clients month" value={0} />
        </Col>
        <Col span={8}>
          <Statistic title="Clients year" value={0} />
        </Col>
      </Row>
      <Title level={2}>Pizzas vendidas</Title>
        <Collapse defaultActiveKey={['1']}>
          {salesData && (

            salesData.map( sale => <>
              <Panel header={`name pizza: ${sale.pizzaName}`} key="1">
                <p>{sale.pizzaName}</p>
                <p>{sale.Price}</p>
              </Panel>
            </>)
          )
          }
        </Collapse>
    </div>
  )
}
