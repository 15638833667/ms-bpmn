export const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
    xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
    xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_Process_xxx_1715318632312" targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn:process id="Process_xxx_1715318632312" name="xxx_业务流程" isExecutable="true">
        <bpmn:startEvent id="Event_0cwuxn8" name="tersftersftersftersftersf1212">
            <bpmn:outgoing>Flow_1u3qi3j</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:intermediateThrowEvent id="Event_1rhypcm" name="1212122121213">
            <bpmn:incoming>Flow_1u3qi3j</bpmn:incoming>
            <bpmn:outgoing>Flow_1fubi9i</bpmn:outgoing>
        </bpmn:intermediateThrowEvent>
        <bpmn:task id="Activity_0y94zw3">
            <bpmn:incoming>Flow_1fubi9i</bpmn:incoming>
            <bpmn:outgoing>Flow_0ancy2d</bpmn:outgoing>
            <bpmn:outgoing>Flow_0x1gekb</bpmn:outgoing>
        </bpmn:task>
        <bpmn:endEvent id="Event_019v0af">
            <bpmn:incoming>Flow_0ancy2d</bpmn:incoming>
            <bpmn:incoming>Flow_09pjsci</bpmn:incoming>
        </bpmn:endEvent>
        <bpmn:sequenceFlow id="Flow_1u3qi3j" sourceRef="Event_0cwuxn8" targetRef="Event_1rhypcm" />
        <bpmn:sequenceFlow id="Flow_1fubi9i" sourceRef="Event_1rhypcm" targetRef="Activity_0y94zw3" />
        <bpmn:sequenceFlow id="Flow_0ancy2d" sourceRef="Activity_0y94zw3" targetRef="Event_019v0af" />
        <bpmn:task id="Activity_0emwrr7">
            <bpmn:incoming>Flow_0x1gekb</bpmn:incoming>
            <bpmn:outgoing>Flow_0yl7nkg</bpmn:outgoing>
        </bpmn:task>
        <bpmn:sequenceFlow id="Flow_0x1gekb" sourceRef="Activity_0y94zw3" targetRef="Activity_0emwrr7" />
        <bpmn:task id="Activity_09k7wku">
            <bpmn:incoming>Flow_0yl7nkg</bpmn:incoming>
            <bpmn:outgoing>Flow_09pjsci</bpmn:outgoing>
        </bpmn:task>
        <bpmn:sequenceFlow id="Flow_0yl7nkg" sourceRef="Activity_0emwrr7" targetRef="Activity_09k7wku" />
        <bpmn:sequenceFlow id="Flow_09pjsci" sourceRef="Activity_09k7wku" targetRef="Event_019v0af" />
    </bpmn:process>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_xxx_1715318632312">
            <bpmndi:BPMNShape id="Event_0cwuxn8_di" bpmnElement="Event_0cwuxn8">
                <dc:Bounds x="222" y="122" width="36" height="36" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="201" y="169" width="83" height="27" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Event_1rhypcm_di" bpmnElement="Event_1rhypcm">
                <dc:Bounds x="322" y="272" width="36" height="36" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="300" y="315" width="80" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Event_019v0af_di" bpmnElement="Event_019v0af">
                <dc:Bounds x="912" y="322" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0y94zw3_di" bpmnElement="Activity_0y94zw3">
                <dc:Bounds x="506" y="266" width="48" height="48" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0emwrr7_di" bpmnElement="Activity_0emwrr7">
                <dc:Bounds x="737" y="64" width="48" height="48" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_09k7wku_di" bpmnElement="Activity_09k7wku">
                <dc:Bounds x="906" y="136" width="48" height="48" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="Flow_1u3qi3j_di" bpmnElement="Flow_1u3qi3j">
                <di:waypoint x="258" y="140" />
                <di:waypoint x="290" y="140" />
                <di:waypoint x="290" y="290" />
                <di:waypoint x="322" y="290" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1fubi9i_di" bpmnElement="Flow_1fubi9i">
                <di:waypoint x="358" y="290" />
                <di:waypoint x="506" y="290" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0ancy2d_di" bpmnElement="Flow_0ancy2d">
                <di:waypoint x="560" y="290" />
                <di:waypoint x="761" y="290" />
                <di:waypoint x="761" y="340" />
                <di:waypoint x="912" y="340" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0x1gekb_di" bpmnElement="Flow_0x1gekb">
                <di:waypoint x="556" y="278" />
                <di:waypoint x="640" y="278" />
                <di:waypoint x="640" y="88" />
                <di:waypoint x="737" y="88" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0yl7nkg_di" bpmnElement="Flow_0yl7nkg">
                <di:waypoint x="785" y="88" />
                <di:waypoint x="880" y="88" />
                <di:waypoint x="880" y="160" />
                <di:waypoint x="906" y="160" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_09pjsci_di" bpmnElement="Flow_09pjsci">
                <di:waypoint x="930" y="184" />
                <di:waypoint x="930" y="322" />
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
</bpmn:definitions>`